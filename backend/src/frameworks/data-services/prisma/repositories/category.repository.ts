import { CategoryRepository } from 'src/core/repositories'
import { PrismaService } from '../prisma.service'
import { Category } from 'src/core/entities'

export class PrismaCategoryRepository implements CategoryRepository {
  private prisma: PrismaService
  constructor(prisma: PrismaService) {
    this.prisma = prisma
  }

  create(item: Category): Promise<Category> {
    return this.prisma.category.create({
      data: {
        name: item.name,
      },
    })
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany()
  }

  findById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({
      where: { id },
    })
  }

  update(id: number, item: Category): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: {
        name: item.name,
      },
    })
  }

  delete(id: number): Promise<Category> {
    return this.prisma.category.delete({ where: { id } })
  }
}
