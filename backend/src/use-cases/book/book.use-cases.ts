import { Injectable } from '@nestjs/common'
import { BookRepository } from '../../core/repositories/book.repository'
import { BookFactoryService } from './book.factory.service'
import { Book } from 'src/core/entities'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { PublisherUseCases } from '../publisher/publisher.use-cases'

@Injectable()
export class BookUseCases {
  constructor(
    private book: BookRepository,
    private bookFactory: BookFactoryService,
    private publisherUseCases: PublisherUseCases,
  ) {}

  getAllBooksByUserId(userId: string): Promise<Book[]> {
    return this.book.findAllByUserId(parseInt(userId))
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

    const createdBook = this.book.create(book)

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
