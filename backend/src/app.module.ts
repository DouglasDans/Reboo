import { Module } from '@nestjs/common'
import { AuthorModule } from './author/author.module'
import { PublisherModule } from './publisher/publisher.module'
import { CategoryModule } from './category/category.module';

@Module({
  imports: [AuthorModule, PublisherModule, CategoryModule],
})
export class AppModule {}
