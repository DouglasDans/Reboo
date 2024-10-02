import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from 'src/use-cases/auth'
import { AuthDto } from 'src/core/dtos'
import { Public } from 'src/utils/decorators'

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post()
  signIn(@Body() authDto: AuthDto) {
    return this.authService.signIn(authDto.email, authDto.password)
  }
}
