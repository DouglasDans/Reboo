import { BookRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Book } from 'src/core/entities'
import { Injectable } from '@nestjs/common'
import { BookStatus } from 'src/core/enums'

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async countAll(userId: number): Promise<number> {
    return await this.prisma.book.count({
      where: { userId },
    })
  }

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
        highlightColor: item.highlightColor,
        language: item.language,
        publisherId: item.publisherId,
        userId: item.userId,
      },
    })
  }

  async findAll(userId: number, select: Array<string>): Promise<Book[]> {
    const includeFields = select.reduce(
      (newObj: Record<string, object | boolean>, selectValue: string) => {
        if (selectValue === 'authors') {
          newObj['authors'] = {
            select: { author: true },
          }
        }
        if (selectValue === 'categories') {
          newObj[selectValue] = {
            select: { category: true },
          }
        }
        if (selectValue === 'publisher') {
          newObj[selectValue] = true
        }
        return newObj
      },
      {},
    )

    return await this.prisma.book.findMany({
      where: {
        userId,
      },
      include: includeFields,
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

  findAllByBookStatus(
    userId: number,
    status: BookStatus,
    onlyFirst: boolean,
  ): Promise<Book[] | Book> {
    if (onlyFirst) {
      return this.prisma.book.findFirst({
        where: {
          userId,
          status,
        },
        orderBy: { updatedAt: 'desc' },
        include: {
          authors: {
            select: { author: true },
          },
        },
      })
    }
    return this.prisma.book.findMany({
      where: {
        userId,
        status,
      },
      orderBy: { updatedAt: 'desc' },
      include: {
        authors: {
          select: { author: true },
        },
      },
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
        highlightColor: item.highlightColor,
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
