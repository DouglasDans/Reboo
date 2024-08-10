import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'

@Injectable()
export class BookCollectionService {
  constructor(private prisma: PrismaService) {}

  async createRelation(bookId: number, collectionId: number) {
    await this.prisma.bookCollection.create({
      data: {
        collectionId: collectionId,
        bookId: bookId,
      },
    })
  }
}
