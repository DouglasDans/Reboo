import { BookCategory } from '../entities'

export abstract class BookCategoryRepository {
  abstract createRelation(
    bookId: number,
    categoryId: number,
  ): Promise<BookCategory>
  abstract deleteRelationsByBook(bookId: number): Promise<void>
  abstract deleteRelationsByCategory(categoryId: number): Promise<void>
}
