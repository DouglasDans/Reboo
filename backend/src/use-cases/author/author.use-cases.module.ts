import { Module } from '@nestjs/common'
import { AuthorFactoryService } from './author-factory.service'
import { AuthorUseCases } from './author.use-cases'

@Module({
  providers: [AuthorFactoryService, AuthorUseCases],
  imports: [AuthorFactoryService, AuthorUseCases],
})
export class AuthorUseCaseModule {}
