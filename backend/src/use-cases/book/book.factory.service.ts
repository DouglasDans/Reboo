import { Injectable } from '@nestjs/common'
import { CreateBookDto, UpdateBookDto } from 'src/core/dtos'
import { Book } from 'src/core/entities'

@Injectable()
export class BookFactoryService {
  createNewBook(createBookDto: CreateBookDto) {
    const book = new Book()
    book.title = createBookDto.title
    book.isbn_10 = createBookDto.isbn_10
    book.isbn_13 = createBookDto.isbn_13
    book.totalPages = createBookDto.totalPages
    book.pagesRead = createBookDto.pagesRead
    book.publicationDate = createBookDto.publicationDate
    book.description = createBookDto.description
    book.status = createBookDto.status
    book.coverImage = createBookDto.coverImage || null
    book.highlightColor = createBookDto.highlightColor || null
    book.language = createBookDto.language
    book.userId = createBookDto.userId
    book.publisherId = createBookDto.publisherId
    return book
  }
  updateNewBook(updateBookDto: UpdateBookDto) {
    const book = new Book()
    book.title = updateBookDto.title
    book.isbn_10 = updateBookDto.isbn_10
    book.isbn_13 = updateBookDto.isbn_13
    book.totalPages = updateBookDto.totalPages
    book.pagesRead = updateBookDto.pagesRead
    book.publicationDate = updateBookDto.publicationDate
    book.description = updateBookDto.description
    book.status = updateBookDto.status
    book.coverImage = updateBookDto.coverImage
    book.highlightColor = updateBookDto.highlightColor
    book.language = updateBookDto.language

    return book
  }
}
