import { Module } from '@nestjs/common'
import { BookAuthorService } from './book-author.service'
import { PrismaService } from '../../prisma.service'
import { AuthorService } from '../author/author.service'

@Module({
  providers: [BookAuthorService, PrismaService, AuthorService],
  exports: [BookAuthorService],
})
export class BookAuthorModule {}
