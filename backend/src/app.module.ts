import { Module } from '@nestjs/common'
import { AuthorModule } from './modules/author/author.module'
import { PublisherModule } from './modules/publisher/publisher.module'
import { CategoryModule } from './modules/category/category.module'
import { CollectionModule } from './modules/collection/collection.module'
import { UserModule } from './modules/user/user.module'
import { BookModule } from './modules/book/book.module'
import { ReadingSessionModule } from './modules/reading-session/reading-session.module'
import { BookCollectionModule } from './modules/book-collection/book-collection.module'

@Module({
  imports: [
    AuthorModule,
    PublisherModule,
    CategoryModule,
    CollectionModule,
    UserModule,
    BookModule,
    ReadingSessionModule,
    BookCollectionModule,
  ],
})
export class AppModule {}
