import { PublisherRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Publisher } from 'src/core/entities'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaPublisherRepository implements PublisherRepository {
  constructor(private prisma: PrismaService) {}

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

  findByName(name: string): Promise<Publisher> {
    return this.prisma.publisher.findFirst({
      where: { name },
    })
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
