import { Module } from '@nestjs/common'
import { DataServicesModule } from './services/data-services/data-services.module'
import { AuthorUseCaseModule } from './use-cases/author'
import { BookUseCaseModule } from './use-cases/book'
import { CategoryUseCaseModule } from './use-cases/category'
import { CollectionUseCaseModule } from './use-cases/collection'
import { PublisherUseCaseModule } from './use-cases/publisher'
import { ReadingSessionUseCaseModule } from './use-cases/reading-session'
import { UserUseCaseModule } from './use-cases/user'
import {
  AppController,
  AuthController,
  AuthorController,
  BookController,
  CategoryController,
  CollectionController,
  PublisherController,
  ReadingSessionController,
  UserController,
} from './controllers'
import { AuthUseCaseModule } from './use-cases/auth'

@Module({
  imports: [
    DataServicesModule,
    AuthUseCaseModule,
    AuthorUseCaseModule,
    BookUseCaseModule,
    CategoryUseCaseModule,
    CollectionUseCaseModule,
    PublisherUseCaseModule,
    ReadingSessionUseCaseModule,
    UserUseCaseModule,
  ],
  controllers: [
    AppController,
    AuthController,
    AuthorController,
    BookController,
    CategoryController,
    CollectionController,
    PublisherController,
    ReadingSessionController,
    UserController,
  ],
})
export class AppModule {}
