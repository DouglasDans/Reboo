import { Module } from '@nestjs/common'
import { BookFactoryService } from './'
import { BookUseCases } from './'
import { BookRepository } from 'src/core/repositories'
import { PrismaBookRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    BookFactoryService,
    BookUseCases,
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
  ],
  exports: [BookFactoryService, BookUseCases],
})
export class BookUseCaseModule {}
