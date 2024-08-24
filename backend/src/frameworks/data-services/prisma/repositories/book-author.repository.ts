import { Injectable } from '@nestjs/common'
import { BookAuthorRepository } from 'src/core/repositories/book-author.repository'
import { PrismaService } from '../prisma.service'
import { BookAuthor } from 'src/core/entities/book-author.entity'

@Injectable()
export class PrismaBookAuthorRepository implements BookAuthorRepository {
  constructor(private prisma: PrismaService) {}

  createRelation(bookId: number, authorId: number): Promise<BookAuthor> {
    return this.prisma.bookAuthor.create({
      data: { bookId, authorId },
    })
  }

  deleteRelationsByAuthor(authorId: number): Promise<boolean> {
    return this.prisma.bookAuthor
      .deleteMany({
        where: { authorId },
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })
  }

  deleteRelationsByBook(bookId: number): Promise<boolean> {
    return this.prisma.bookAuthor
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
}
