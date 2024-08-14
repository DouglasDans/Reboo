import { Module } from '@nestjs/common'
import { CollectionFactoryService } from './collection.factory.service'
import { CollectionUseCases } from './collection.use-cases'

@Module({
  providers: [CollectionFactoryService, CollectionUseCases],
  exports: [CollectionFactoryService, CollectionUseCases],
})
export class CollectionUseCaseModule {}
