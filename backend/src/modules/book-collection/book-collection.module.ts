import { Module } from '@nestjs/common'
import { BookCollectionService } from './book-collection.service'
import { PrismaService } from 'src/prisma.service'

@Module({
  providers: [BookCollectionService, PrismaService],
  exports: [BookCollectionService],
})
export class BookCollectionModule {}
