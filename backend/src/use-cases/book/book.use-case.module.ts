import { Module } from '@nestjs/common'
import { BookFactoryService } from '.'
import { BookService } from '.'
import { BookRepository } from 'src/core/repositories'
import { PrismaBookRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { PublisherUseCaseModule } from '../publisher'
import { BookCategoryModule } from '../book-category'
import { BookAuthorModule } from '../book-author'

@Module({
  imports: [
    DataServicesModule,
    PublisherUseCaseModule,
    BookCategoryModule,
    BookAuthorModule,
  ],
  providers: [
    BookFactoryService,
    BookService,
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
  ],
  exports: [BookFactoryService, BookService],
})
export class BookUseCaseModule {}
