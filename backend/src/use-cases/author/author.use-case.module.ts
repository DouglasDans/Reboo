import { Module } from '@nestjs/common'
import { AuthorFactoryService } from './author.factory.service'
import { AuthorService } from './author.service'
import { AuthorRepository } from 'src/core/repositories'
import { PrismaAuthorRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    AuthorFactoryService,
    AuthorService,
    {
      provide: AuthorRepository,
      useClass: PrismaAuthorRepository,
    },
  ],
  exports: [AuthorFactoryService, AuthorService],
})
export class AuthorUseCaseModule {}
