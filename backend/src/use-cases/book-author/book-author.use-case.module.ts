import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { BookAuthorService } from './book-author.service'
import { BookAuthorRepository } from 'src/core/repositories/book-author.repository'
import { PrismaBookAuthorRepository } from 'src/frameworks/data-services/prisma/repositories/book-author.repository'
import { Module } from '@nestjs/common'
import { AuthorUseCaseModule } from '../author'

@Module({
  imports: [DataServicesModule, AuthorUseCaseModule],
  providers: [
    BookAuthorService,
    {
      provide: BookAuthorRepository,
      useClass: PrismaBookAuthorRepository,
    },
  ],
  exports: [BookAuthorService],
})
export class BookAuthorUseCaseModule {}
