import { Module } from '@nestjs/common'
import { AuthorFactoryService } from './author.factory.service'
import { AuthorUseCases } from './author.use-cases'
import { AuthorRepository } from 'src/core/repositories'
import { PrismaAuthorRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    AuthorFactoryService,
    AuthorUseCases,
    {
      provide: AuthorRepository,
      useClass: PrismaAuthorRepository,
    },
  ],
  exports: [AuthorFactoryService, AuthorUseCases],
})
export class AuthorUseCaseModule {}
