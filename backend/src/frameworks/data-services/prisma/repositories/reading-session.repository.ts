import { ReadingSession } from 'src/core/entities'
import { PrismaService } from '../prisma.service'
import { ReadingSessionRepository } from 'src/core/repositories'
import { Inject } from '@nestjs/common'

export class PrismaReadingSessionRepository
  implements ReadingSessionRepository
{
  private prisma: PrismaService
  constructor(@Inject(PrismaService) prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: ReadingSession): Promise<ReadingSession> {
    return this.prisma.readingSession.create({
      data: {
        startDate: item.startDate,
        endDate: item.endDate,
        pagesRead: item.pagesRead,
        bookId: item.bookId,
        userId: item.userId,
      },
    })
  }

  findAll(): Promise<ReadingSession[]> {
    return this.prisma.readingSession.findMany()
  }

  findAllByUserId(userId: number): Promise<ReadingSession[]> {
    return this.prisma.readingSession.findMany({
      where: { userId },
    })
  }

  findById(id: number, userId: number): Promise<ReadingSession> {
    return this.prisma.readingSession.findUnique({
      where: { id, userId },
    })
  }

  update(id: number, item: ReadingSession): Promise<ReadingSession> {
    return this.prisma.readingSession.update({
      where: { id },
      data: {
        startDate: item.startDate,
        endDate: item.endDate,
        pagesRead: item.pagesRead,
        bookId: item.bookId,
        userId: item.userId,
      },
    })
  }

  delete(id: number): Promise<ReadingSession> {
    return this.prisma.readingSession.delete({
      where: { id },
    })
  }
}
