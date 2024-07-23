import { Module } from '@nestjs/common'
import { AuthorModule } from './author/author.module'
import { PublisherModule } from './publisher/publisher.module'
import { CategoryModule } from './category/category.module'
import { CollectionModule } from './collection/collection.module'

@Module({
  imports: [AuthorModule, PublisherModule, CategoryModule, CollectionModule],
})
export class AppModule {}
