import { Book } from './book.entity'
import { Collection } from './collection.entity'

export class BookCollection {
  bookId: number
  collectionId: number

  book?: Book
  collection?: Collection
}
