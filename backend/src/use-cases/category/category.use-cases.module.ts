import { Module } from '@nestjs/common'
import { CategoryFactoryService } from './category-factory.service'
import { CategoryUseCases } from './category.use-cases'
import { PrismaCategoryRepository } from 'src/frameworks/data-services/prisma/repositories'
import { CategoryRepository } from 'src/core/repositories'

@Module({
  providers: [
    CategoryFactoryService,
    CategoryUseCases,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [CategoryFactoryService, CategoryUseCases],
})
export class CategoryUseCaseModule {}
