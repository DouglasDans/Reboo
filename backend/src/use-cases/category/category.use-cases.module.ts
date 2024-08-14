import { Module } from '@nestjs/common'
import { CategoryFactoryService } from './category-factory.service'
import { CategoryUseCases } from './category.use-cases'

@Module({
  providers: [CategoryFactoryService, CategoryUseCases],
  exports: [CategoryFactoryService, CategoryUseCases],
})
export class CategoryUseCaseModule {}
