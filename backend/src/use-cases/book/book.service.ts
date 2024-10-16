import { BookStatus, BookStatusEnum } from 'src/core/enums'
import { Injectable } from '@nestjs/common'
import { BookRepository } from '../../core/repositories/book.repository'
import { BookFactoryService } from './book.factory.service'
import { Book } from 'src/core/entities'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { PublisherService } from '../publisher'
import { BookCategoryService } from '../book-category'
import { BookAuthorService } from '../book-author'
import { BookCollectionService } from '../book-collection'

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
    if (createBookDto.publisherId) {
      const publisher = await this.publisherService.createPublisher({
        name: createBookDto.publisher,
      })
      createBookDto.publisherId = publisher.id
    }

    const book = this.bookFactory.createNewBook(createBookDto)
    const createdBook = await this.book.create(book)

    if (createBookDto.category) {
      this.bookCategoryService.createRelation(
        createdBook.id,
        createBookDto.category,
      )
    }

    this.bookAuthorService.createRelation(createdBook.id, createBookDto.author)

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

    if (updateBookDto.publisher) {
      const publisher = await this.publisherService.getPublisherByName(
        updateBookDto.publisher,
      )

      if (!publisher) {
        await this.publisherService.createPublisher({
          name: updateBookDto.publisher,
        })
      }
    }

    await this.bookAuthorService.deleteRelationByBookId(bookId)
    this.bookAuthorService.createRelation(bookId, updateBookDto.author)

    if (updateBookDto.category) {
      await this.bookCategoryService.deleteRelationByBookId(bookId)
      this.bookCategoryService.createRelation(bookId, updateBookDto.category)
    }

    return this.book.update(bookId, book)
  }

  async updateHighlightColor(
    bookId: number,
    highlightColor: string,
  ): Promise<Book> {
    const book = new UpdateBookDto()
    book.highlightColor = highlightColor
    return await this.book.update(bookId, book)
  }

  async updateBookStatus(
    bookId: number,
    bookStatus: BookStatusEnum,
  ): Promise<Book> {
    const book = new UpdateBookDto()
    book.status = bookStatus
    return await this.book.update(bookId, book)
  }

  async deleteBook(bookId: number) {
    await this.bookAuthorService.deleteRelationByBookId(bookId)
    await this.bookCategoryService.deleteRelationByBookId(bookId)
    return await this.book.delete(bookId)
  }
}
