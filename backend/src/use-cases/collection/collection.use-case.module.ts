import { Module } from '@nestjs/common'
import { CollectionFactoryService } from './collection.factory.service'
import { CollectionService } from './collection.service'
import { CollectionRepository } from 'src/core/repositories'
import { PrismaCollectionRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    CollectionFactoryService,
    CollectionService,
    {
      provide: CollectionRepository,
      useClass: PrismaCollectionRepository,
    },
  ],
  exports: [CollectionFactoryService, CollectionService],
})
export class CollectionUseCaseModule {}
