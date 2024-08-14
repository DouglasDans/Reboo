import { Injectable } from '@nestjs/common'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/core/dtos'
import { Category } from 'src/core/entities'

@Injectable()
export class CategoryFactoryService {
  createNewCategory(createCategoryDto: CreateCategoryDto) {
    const category = new Category()
    category.name = createCategoryDto.name

    return category
  }
  updateNewCategory(updateCategoryDto: UpdateCategoryDto) {
    const category = new Category()
    category.name = updateCategoryDto.name

    return category
  }
}
