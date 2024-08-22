import { BookCollection } from 'src/core/entities/book-collection.entity'
import { BookCollectionRepository } from 'src/core/repositories/book-collection.repository'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaBookCollectionRepository
  implements BookCollectionRepository
{
  constructor(private prisma: PrismaService) {}

  createRelation(
    bookId: number,
    collectionId: number,
  ): Promise<BookCollection> {
    return this.prisma.bookCollection.create({
      data: { bookId, collectionId },
    })
  }

  deleteRelationByBookId(bookId: number): Promise<boolean> {
    return this.prisma.bookCollection
      .deleteMany({
        where: { bookId },
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }

  deleteRelationByCollectionId(collectionId: number): Promise<boolean> {
    return this.prisma.bookCollection
      .deleteMany({
        where: { collectionId },
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
}
