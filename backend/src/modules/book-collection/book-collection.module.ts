import { Module } from '@nestjs/common';
import { BookCollectionService } from './book-collection.service';

@Module({
  providers: [BookCollectionService]
})
export class BookCollectionModule {}
