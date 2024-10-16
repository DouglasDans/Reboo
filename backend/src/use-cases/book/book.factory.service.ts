import { Injectable } from '@nestjs/common'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { Book } from 'src/core/entities'

@Injectable()
export class BookFactoryService {
  createNewBook(createBookDto: CreateBookDto) {
    const book = new Book()
    book.title = createBookDto.title
    book.isbn_10 = createBookDto.isbn_10 || null
    book.isbn_13 = createBookDto.isbn_13 || null
    book.totalPages = createBookDto.totalPages
    book.pagesRead = createBookDto.pagesRead
    book.publicationDate = createBookDto.publicationDate || null
    book.description = createBookDto.description || null
    book.status = createBookDto.status
    book.coverImage = createBookDto.coverImage || null
    book.highlightColor = createBookDto.highlightColor || null
    book.language = createBookDto.language || null
    book.userId = createBookDto.userId
    book.publisherId = createBookDto.publisherId || null
    return book
  }
  updateNewBook(updateBookDto: UpdateBookDto) {
    const book = new Book()
    book.title = updateBookDto.title
    book.isbn_10 = updateBookDto.isbn_10 || null
    book.isbn_13 = updateBookDto.isbn_13 || null
    book.totalPages = updateBookDto.totalPages
    book.pagesRead = updateBookDto.pagesRead
    book.publicationDate = updateBookDto.publicationDate || null
    book.description = updateBookDto.description || null
    book.status = updateBookDto.status
    book.coverImage = updateBookDto.coverImage || null
    book.highlightColor = updateBookDto.highlightColor || null
    book.language = updateBookDto.language || null
    book.publisherId = updateBookDto.publisherId || null
    return book
  }
}
