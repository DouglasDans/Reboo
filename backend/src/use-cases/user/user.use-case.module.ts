import { Module } from '@nestjs/common'
import { UserFactoryService } from './user.factory.service'
import { UserService } from './user.service'
import { UserRepository } from 'src/core/repositories'
import { PrismaUserRepository } from 'src/frameworks/data-services/prisma/repositories'
import { DataServicesModule } from 'src/services/data-services/data-services.module'

@Module({
  imports: [DataServicesModule],
  providers: [
    UserFactoryService,
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [UserFactoryService, UserService],
})
export class UserUseCaseModule {}
