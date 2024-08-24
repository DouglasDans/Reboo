import { Injectable } from '@nestjs/common'
import { BookCategoryRepository } from 'src/core/repositories'
import { CategoryService } from '../category'
import { Category } from 'src/core/entities'

@Injectable()
export class BookCategoryService {
  constructor(
    private bookCategory: BookCategoryRepository,
    private categoryService: CategoryService,
  ) {}

  createRelation(bookId: number, categories: Array<string>) {
    categories.map(async (categoryName) => {
      let category = (await this.verifyIfExistsCategoryByName(
        categoryName,
      )) as Category

      if (!category) {
        category = (await this.categoryService.createCategory({
          name: categoryName,
        })) as Category
      }
      await this.bookCategory.createRelation(bookId, category.id)
    })
  }

  deleteRelationByBookId(bookId: number) {
    this.bookCategory.deleteRelationsByBook(bookId)
  }

  deleteRelationByCategoryId(categoryId: number) {
    this.bookCategory.deleteRelationsByCategory(categoryId)
  }

  private verifyIfExistsCategoryByName(name: string) {
    return this.categoryService.getCategoryByName(name)
  }
}
