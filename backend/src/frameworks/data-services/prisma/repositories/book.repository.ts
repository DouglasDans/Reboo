import { BookRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Book } from 'src/core/entities'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(item: Book): Promise<Book> {
    return await this.prisma.book.create({
      data: {
        title: item.title,
        isbn_10: item.isbn_10,
        isbn_13: item.isbn_13,
        totalPages: item.totalPages,
        pagesRead: item.pagesRead,
        publicationDate: item.publicationDate,
        description: item.description,
        status: item.status,
        coverImage: item.coverImage,
        backgroundColors: item.backgroundColors,
        language: item.language,
        publisherId: item.publisherId,
        userId: item.userId,
      },
    })
  }

  findAllByUserId(userId: number): Promise<Book[]> {
    return this.prisma.book.findMany({
      where: {
        userId,
      },
    })
  }

  findById(id: number): Promise<Book> {
    return this.prisma.book.findUnique({
      where: { id },
    })
  }

  findByTitle(title: string): Promise<Book> {
    return this.prisma.book.findFirst({
      where: { title },
    })
  }

  update(id: number, item: Book): Promise<Book> {
    return this.prisma.book.update({
      where: { id },
      data: {
        title: item.title,
        isbn_10: item.isbn_10,
        isbn_13: item.isbn_13,
        totalPages: item.totalPages,
        pagesRead: item.pagesRead,
        publicationDate: item.publicationDate,
        description: item.description,
        status: item.status,
        coverImage: item.coverImage,
        backgroundColors: item.backgroundColors,
        language: item.language,
        publisherId: item.id,
      },
    })
  }

  delete(id: number): Promise<Book> {
    return this.prisma.book.delete({
      where: { id },
    })
  }
}
