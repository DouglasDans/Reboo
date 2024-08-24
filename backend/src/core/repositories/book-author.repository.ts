import { BookAuthor } from '../entities/book-author.entity'

export abstract class BookAuthorRepository {
  abstract createRelation(bookId: number, authorId: number): Promise<BookAuthor>
  abstract deleteRelationsByBook(bookId: number): Promise<boolean>
  abstract deleteRelationsByAuthor(authorId: number): Promise<boolean>
}
