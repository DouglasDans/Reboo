import { Module } from '@nestjs/common'
import { BookService } from './book.service'
import { BookController } from './book.controller'
import { PrismaService } from 'src/prisma.service'
import { PublisherService } from '../publisher/publisher.service'

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService, PublisherService],
})
export class BookModule {}
