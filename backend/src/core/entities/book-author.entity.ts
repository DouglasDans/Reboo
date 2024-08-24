import { Author } from './author.entity'
import { Book } from './book.entity'

export class BookAuthor {
  bookId: number
  authorId: number

  book?: Book
  author?: Author
}
