import { Injectable } from '@nestjs/common'
import { BookRepository } from '../../core/repositories/book.repository'
import { BookFactoryService } from './book.factory.service'
import { Author, Book } from 'src/core/entities'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { PublisherService } from '../publisher'
import { BookCategoryService } from '../book-category'
import { BookAuthorService } from '../book-author'
import { BookCollectionService } from '../book-collection'
import { BookStatus } from 'src/core/enums'
import { AuthorService } from '../author'
import { CategoryService } from '../category/category.service'

@Injectable()
export class BookService {
  constructor(
    private book: BookRepository,
    private bookAuthorService: BookAuthorService,
    private bookCategoryService: BookCategoryService,
    private bookCollectionService: BookCollectionService,
    private bookFactory: BookFactoryService,
    private publisherService: PublisherService,
  ) {}

  getAll(userId: string, select: string): Promise<Book[]> {
    const arrSelect = select ? select.split(',') : []

    return this.book.findAll(parseInt(userId), arrSelect)
  }

  getAllBooksByUserId(userId: string): Promise<Book[]> {
    return this.book.findAllByUserId(parseInt(userId))
  }

  getAllByBookStatus(
    userId: string,
    status: BookStatus,
    findFirst: boolean,
  ): Promise<Book[] | Book> {
    return this.book.findAllByBookStatus(parseInt(userId), status, findFirst)
  }

  getBookById(id: string): Promise<Book> {
    return this.book.findById(parseInt(id))
  }

  getBookByTitle(title: string): Promise<Book> {
    return this.book.findByTitle(title)
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const publisher = await this.publisherService.createPublisher({
      name: createBookDto.publisher,
    })
    createBookDto.publisherId = publisher.id

    const book = await this.bookFactory.createNewBook(createBookDto)
    const createdBook = await this.book.create(book)

    await this.bookCategoryService.createRelation(
      createdBook.id,
      createBookDto.category,
    )

    await this.bookAuthorService.createRelation(
      createdBook.id,
      createBookDto.author,
    )

    if (createBookDto.collectionId) {
      await this.bookCollectionService.createRelation(
        createdBook.id,
        createBookDto.collectionId,
      )
    }

    return createdBook
  }

  async updateBook(bookId: number, updateBookDto: UpdateBookDto) {
    const book = this.bookFactory.updateNewBook(updateBookDto)

    const publisher = await this.publisherService.getPublisherByName(
      updateBookDto.publisher,
    )

    if (!publisher) {
      await this.publisherService.createPublisher({
        name: updateBookDto.publisher,
      })
    }

    await this.bookAuthorService.deleteRelationByBookId(bookId)
    await this.bookCategoryService.deleteRelationByBookId(bookId)

    await this.bookAuthorService.createRelation(bookId, updateBookDto.author)
    await this.bookCategoryService.createRelation(
      bookId,
      updateBookDto.category,
    )

    return this.book.update(bookId, book)
  }

  async deleteBook(bookId: number) {
    await this.bookAuthorService.deleteRelationByBookId(bookId)
    await this.bookCategoryService.deleteRelationByBookId(bookId)
    return this.book.delete(bookId)
  }
}
