import { Book } from './book.entity'
import { Category } from './category.entity'

export class BookCategory {
  bookId: number
  categoryId: number

  book?: Book
  category?: Category
}
