import { CollectionRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Collection } from 'src/core/entities'

export class PrismaCollectionRepository implements CollectionRepository {
  private prisma: PrismaService
  constructor(prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: Collection): Promise<Collection> {
    return this.prisma.collection.create({
      data: {
        name: item.name,
        backgroundColors: item.backgroundColors,
        userId: item.userId,
      },
    })
  }

  findAll(): Promise<Collection[]> {
    return this.prisma.collection.findMany()
  }

  findById(id: number): Promise<Collection> {
    return this.prisma.collection.findUnique({
      where: { id },
    })
  }

  update(id: number, item: Collection): Promise<Collection> {
    return this.prisma.collection.update({
      where: { id },
      data: {
        name: item.name,
        backgroundColors: item.backgroundColors,
        userId: item.userId,
      },
    })
  }

  delete(id: number): Promise<Collection> {
    return this.prisma.collection.delete({
      where: { id },
    })
  }
}
