import { Injectable } from '@nestjs/common'
import { CategoryRepository } from 'src/core/repositories'
import { CategoryFactoryService } from './category-factory.service'
import { Category } from 'src/core/entities'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/core/dtos'

@Injectable()
export class CategoryUseCases {
  constructor(
    private category: CategoryRepository,
    private categoryFactory: CategoryFactoryService,
  ) {}

  getAllCategories(): Promise<Category[]> {
    return this.category.findAll()
  }

  getCategoryById(id: string): Promise<Category> {
    return this.category.findById(parseInt(id))
  }

  getCategoryByName(name: string): Promise<Category> {
    return this.category.findByName(name)
  }

  createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.categoryFactory.createNewCategory(createCategoryDto)
    return this.category.create(category)
  }

  updateCategory(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
    const category = this.categoryFactory.updateNewCategory(updateCategoryDto)
    return this.category.update(parseInt(categoryId), category)
  }

  deleteCategory(categoryId: string) {
    return this.category.delete(parseInt(categoryId))
  }
}
