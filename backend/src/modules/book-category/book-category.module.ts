import { Module } from '@nestjs/common'
import { BookCategoryService } from './book-category.service'
import { PrismaService } from '../../prisma.service'
import { CategoryService } from '../category/category.service'
import { CollectionService } from '../collection/collection.service'

@Module({
  providers: [BookCategoryService, PrismaService, CollectionService],
  exports: [BookCategoryService],
})
export class BookCategoryModule {}
