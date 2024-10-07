import { forwardRef, Module } from '@nestjs/common'
import { DataServicesModule } from 'src/services/data-services/data-services.module'
import { AuthService } from './auth.service'
import { UserUseCaseModule } from '../user'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { jwtConstants } from './auth.constants'

@Module({
  imports: [
    DataServicesModule,
    forwardRef(() => UserUseCaseModule),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '14d' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthUseCaseModule {}
