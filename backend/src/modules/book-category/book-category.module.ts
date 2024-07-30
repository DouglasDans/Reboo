import { Module } from '@nestjs/common'
import { BookCategoryService } from './book-category.service'
import { PrismaService } from '../../prisma.service'
import { CategoryService } from '../category/category.service'

@Module({
  providers: [BookCategoryService, PrismaService, CategoryService],
  exports: [BookCategoryService],
})
export class BookCategoryModule {}
