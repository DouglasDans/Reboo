import { Author } from 'src/core/entities'
import { PrismaService } from '../prisma.service'
import { AuthorRepository } from 'src/core/repositories'

export class PrismaAuthorRepository implements AuthorRepository {
  private prisma: PrismaService
  constructor(prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: Author): Promise<Author> {
    return this.prisma.author.create({
      data: item,
    })
  }

  findAll(): Promise<Author[]> {
    return this.prisma.author.findMany()
  }

  findById(id: number): Promise<Author> {
    return this.prisma.author.findUnique({
      where: { id },
    })
  }

  update(id: number, item: Author) {
    return this.prisma.author.update({
      data: item,
      where: { id },
    })
  }

  delete(id: number): Promise<Author> {
    return this.prisma.author.delete({
      where: { id },
    })
  }
}
