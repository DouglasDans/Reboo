import { Module } from '@nestjs/common'
import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { BookCategoryService } from './book-category.service'
import { BookCategoryRepository } from 'src/core/repositories'
import { PrismaBookCategoryRepository } from 'src/frameworks/data-services/prisma/repositories/book-category.repository'
import { CategoryUseCaseModule } from '../category'

@Module({
  imports: [DataServicesModule, CategoryUseCaseModule],
  providers: [
    BookCategoryService,
    {
      provide: BookCategoryRepository,
      useClass: PrismaBookCategoryRepository,
    },
  ],
  exports: [BookCategoryService],
})
export class BookCategoryModule {}
