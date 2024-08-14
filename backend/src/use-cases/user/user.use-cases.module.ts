import { Module } from '@nestjs/common'
import { UserFactoryService } from './user.factory.service'
import { UserUseCases } from './user.use-cases'

@Module({
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCaseModule {}
