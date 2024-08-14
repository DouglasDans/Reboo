import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'
import { AuthorUseCaseModule } from './use-cases/author'
import { BookUseCaseModule } from './use-cases/book'
import { CategoryUseCaseModule } from './use-cases/category'
import { CollectionUseCaseModule } from './use-cases/collection'
import { PublisherUseCaseModule } from './use-cases/publisher'
import { ReadingSessionUseCaseModule } from './use-cases/reading-session'
import { UserUseCaseModule } from './use-cases/user'

@Module({
  imports: [
    DataServicesModule,
    AuthorUseCaseModule,
    BookUseCaseModule,
    CategoryUseCaseModule,
    CollectionUseCaseModule,
    PublisherUseCaseModule,
    ReadingSessionUseCaseModule,
    UserUseCaseModule,
  ],
})
export class AppModule {}
