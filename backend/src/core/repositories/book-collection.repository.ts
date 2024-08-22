import { BookCollection } from '../entities/book-collection.entity'

export abstract class BookCollectionRepository {
  abstract createRelation(
    bookId: number,
    collectionId: number,
  ): Promise<BookCollection>

  abstract deleteRelationByBookId(bookId: number): Promise<boolean>

  abstract deleteRelationByCollectionId(collectionId: number): Promise<boolean>
}
