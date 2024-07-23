import { Module } from '@nestjs/common'
import { AuthorModule } from './author/author.module'
import { PublisherModule } from './publisher/publisher.module'

@Module({
  imports: [AuthorModule, PublisherModule],
})
export class AppModule {}
