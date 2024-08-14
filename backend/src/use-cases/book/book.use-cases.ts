import { Injectable } from '@nestjs/common'
import { BookRepository } from '../../core/repositories/book.repository'
import { BookFactoryService } from './book.factory.service'
import { Book } from 'src/core/entities'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'

@Injectable()
export class BookUseCases {
  constructor(
    private book: BookRepository,
    private bookFactory: BookFactoryService,
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

  createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookFactory.createNewBook(createBookDto)
    return this.book.create(book)
  }

  updateBook(bookId: string, updateBookDto: UpdateBookDto) {
    const book = this.bookFactory.updateNewBook(updateBookDto)
    return this.book.update(parseInt(bookId), book)
  }

  deleteBook(bookId: string) {
    return this.book.delete(parseInt(bookId))
  }
}
