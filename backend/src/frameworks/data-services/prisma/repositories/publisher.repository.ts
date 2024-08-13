import { PublisherRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Publisher } from 'src/core/entities'

export class PrismaPublisherRepository implements PublisherRepository {
  private prisma: PrismaService
  constructor(prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: Publisher): Promise<Publisher> {
    return this.prisma.publisher.create({
      data: {
        name: item.name,
      },
    })
  }

  findAll(): Promise<Publisher[]> {
    return this.prisma.publisher.findMany()
  }

  findById(id: number): Promise<Publisher> {
    return this.prisma.publisher.findUnique({
      where: { id },
    })
  }

  update(id: number, item: Publisher): Promise<Publisher> {
    return this.prisma.publisher.update({
      where: { id },
      data: {
        name: item.name,
      },
    })
  }

  delete(id: number): Promise<Publisher> {
    return this.prisma.publisher.delete({
      where: { id },
    })
  }
}
