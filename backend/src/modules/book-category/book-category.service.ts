import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma.service'
import { CategoryService } from '../category/category.service'

@Injectable()
export class BookCategoryService {
  constructor(
    private categoryService: CategoryService,
    private prisma: PrismaService,
  ) {}

  async getIfExistsCategoryByName(name: string) {
    return this.categoryService.findByName(name)
  }

  async createRelation(bookId: number, authorName: string) {
    let category = await this.getIfExistsCategoryByName(authorName)

    if (!category) {
      category = await this.categoryService.create({
        name: authorName,
      })
    }

    await this.prisma.bookCategory.create({
      data: {
        categoryId: category.id,
        bookId: bookId,
      },
    })
  }
}
