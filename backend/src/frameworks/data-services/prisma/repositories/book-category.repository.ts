import { BookCategory } from 'src/core/entities'
import { BookCategoryRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaBookCategoryRepository implements BookCategoryRepository {
  constructor(private prisma: PrismaService) {}

  createRelation(bookId: number, categoryId: number): Promise<BookCategory> {
    return this.prisma.bookCategory.create({
      data: {
        categoryId,
        bookId,
      },
    })
  }

  deleteRelationsByBook(bookId: number): Promise<boolean> {
    return this.prisma.bookCategory
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

  deleteRelationsByCategory(categoryId: number): Promise<boolean> {
    return this.prisma.bookCategory
      .deleteMany({
        where: { categoryId },
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }
}
