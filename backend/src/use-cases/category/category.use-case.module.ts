import { Module } from '@nestjs/common'
import { CategoryFactoryService } from './category-factory.service'
import { CategoryService } from './category.service'
import { PrismaCategoryRepository } from 'src/frameworks/data-services/prisma/repositories'
import { CategoryRepository } from 'src/core/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    CategoryFactoryService,
    CategoryService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [CategoryFactoryService, CategoryService],
})
export class CategoryUseCaseModule {}
