import { BookCategory } from '../entities'

export abstract class BookCategoryRepository {
  abstract createRelation(
    bookId: number,
    categoryId: number,
  ): Promise<BookCategory>
  abstract deleteRelationsByBook(bookId: number): Promise<boolean>
  abstract deleteRelationsByCategory(categoryId: number): Promise<boolean>
}
