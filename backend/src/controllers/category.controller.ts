import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CreateCategoryDto, UpdateCategoryDto } from 'src/core/dtos'
import { CategoryUseCases } from 'src/use-cases/category'

@Controller('api/v1/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryUseCases) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Get()
  findAll() {
    return this.categoryService.getAllCategories()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.getCategoryById(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, updateCategoryDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id)
  }
}
