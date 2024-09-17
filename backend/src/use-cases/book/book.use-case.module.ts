import { Module } from '@nestjs/common'
import { BookFactoryService } from '.'
import { BookService } from '.'
import { BookRepository } from 'src/core/repositories'
import { PrismaBookRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { PublisherUseCaseModule } from '../publisher'
import { BookCategoryUseCaseModule } from '../book-category'
import { BookAuthorUseCaseModule } from '../book-author'
import { BookCollectionUseCaseModule } from '../book-collection'
import { AuthorService, AuthorUseCaseModule } from '../author'
import { CategoryUseCaseModule } from '../category'

@Module({
  imports: [
    DataServicesModule,
    PublisherUseCaseModule,
    BookAuthorUseCaseModule,
    BookCategoryUseCaseModule,
    BookCollectionUseCaseModule,
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
