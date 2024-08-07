import { Module } from '@nestjs/common'
import { BookService } from './book.service'
import { BookController } from './book.controller'
import { PrismaService } from 'src/prisma.service'
import { PublisherService } from '../publisher/publisher.service'
import { BookAuthorModule } from '../book-author/book-author.module'
import { BookCategoryModule } from '../book-category/book-category.module'
import { BookCollectionModule } from '../book-collection/book-collection.module'

@Module({
  imports: [BookAuthorModule, BookCategoryModule, BookCollectionModule],
  controllers: [BookController],
  providers: [BookService, PrismaService, PublisherService],
})
export class BookModule {}
