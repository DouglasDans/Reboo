import { Module } from '@nestjs/common'
import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { AuthService } from './auth.service'
import { UserUseCaseModule } from '../user'

@Module({
  imports: [DataServicesModule, UserUseCaseModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthUseCaseModule {}
