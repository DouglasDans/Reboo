import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { CollectionService } from '../collection/collection.service'

@Injectable()
export class BookCollectionService {
  constructor(
    private collectionService: CollectionService,
    private prisma: PrismaService,
  ) {}

  async createRelation(bookId: number, collectionId: number) {
    await this.prisma.bookCollection.create({
      data: {
        collectionId: collectionId,
        bookId: bookId,
      },
    })
  }
}
