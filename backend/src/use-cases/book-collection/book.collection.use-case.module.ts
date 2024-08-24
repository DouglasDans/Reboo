import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { BookCollectionService } from './book-collection.service'
import { BookCollectionRepository } from 'src/core/repositories/book-collection.repository'
import { PrismaBookCollectionRepository } from 'src/frameworks/data-services/prisma/repositories/book-collection.repository'
import { Module } from '@nestjs/common'

@Module({
  imports: [DataServicesModule],
  providers: [
    BookCollectionService,
    {
      provide: BookCollectionRepository,
      useClass: PrismaBookCollectionRepository,
    },
  ],
  exports: [BookCollectionService],
})
export class BookCollectionUseCaseModule {}
