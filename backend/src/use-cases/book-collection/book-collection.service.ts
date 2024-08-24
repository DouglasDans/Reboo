import { Injectable } from '@nestjs/common'
import { BookCollectionRepository } from 'src/core/repositories/book-collection.repository'

@Injectable()
export class BookCollectionService {
  constructor(private bookCollection: BookCollectionRepository) {}

  createRelation(bookId: number, collectionId: number) {
    return this.bookCollection.createRelation(bookId, collectionId)
  }

  deleteRelationByBookId(bookId: number) {
    return this.bookCollection.deleteRelationByBookId(bookId)
  }

  deleteRelationByCollectionId(collectionId: number) {
    return this.bookCollection.deleteRelationByCollectionId(collectionId)
  }
}
