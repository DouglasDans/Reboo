import { Injectable } from '@nestjs/common'
import { BookRepository } from '../../core/repositories/book.repository'
import { BookFactoryService } from './book.factory.service'
import { Book } from 'src/core/entities'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { PublisherService } from '../publisher'
import { BookCategoryService } from '../book-category'
import { BookAuthorService } from '../book-author'
import { BookCollectionService } from '../book-collection'
import { BookStatus } from 'src/core/enums'

@Injectable()
export class BookService {
  constructor(
    private book: BookRepository,
    private bookAuthorService: BookAuthorService,
    private bookCategoryService: BookCategoryService,
    private bookCollectionService: BookCollectionService,
    private bookFactory: BookFactoryService,
    private publisherUseCases: PublisherService,
  ) {}

  getAll(userId: string, select: string): Promise<Book[]> {
    const arrSelect = select ? select.split(',') : []

    return this.book.findAll(parseInt(userId), arrSelect)
  }

  getAllBooksByUserId(userId: string): Promise<Book[]> {
    return this.book.findAllByUserId(parseInt(userId))
  }

  getAllByBookStatus(userId: string, status: BookStatus) {
    return this.book.findAllByBookStatus(parseInt(userId), status)
  }

  getBookById(id: string): Promise<Book> {
    return this.book.findById(parseInt(id))
  }

  getBookByTitle(title: string): Promise<Book> {
    return this.book.findByTitle(title)
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const publisher = await this.publisherUseCases.createPublisher({
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

  updateBook(bookId: string, updateBookDto: UpdateBookDto) {
    const book = this.bookFactory.updateNewBook(updateBookDto)
    return this.book.update(parseInt(bookId), book)
  }

  deleteBook(bookId: string) {
    return this.book.delete(parseInt(bookId))
  }
}
