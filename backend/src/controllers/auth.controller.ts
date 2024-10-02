import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common'
import { AuthService } from 'src/use-cases/auth'
import { CreateUserDto } from 'src/core/dtos'

@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() createUserDto: CreateUserDto) {
    return this.authService.signIn(createUserDto.email, createUserDto.password)
  }
}
