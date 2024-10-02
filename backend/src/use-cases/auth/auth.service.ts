import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user'
import { User } from 'src/core/entities'
import { compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = (await this.userService.getUserByEmail(email)) as User
    const passwordsMatch = await compare(pass, user.password)

    if (!passwordsMatch) {
      throw new UnauthorizedException()
    }
    const payload = { userId: user.id, userName: user.name }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
