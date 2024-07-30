import { Module } from '@nestjs/common'
import { AuthorModule } from './modules/author/author.module'
import { PublisherModule } from './modules/publisher/publisher.module'
import { CategoryModule } from './modules/category/category.module'
import { CollectionModule } from './modules/collection/collection.module'
import { UserModule } from './modules/user/user.module'
import { BookModule } from './modules/book/book.module'

@Module({
  imports: [
    AuthorModule,
    PublisherModule,
    CategoryModule,
    CollectionModule,
    UserModule,
    BookModule,
  ],
})
export class AppModule {}
