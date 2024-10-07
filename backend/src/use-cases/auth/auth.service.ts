import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { UserService } from '../user'
import { User } from 'src/core/entities'
import { compare, genSalt, hash } from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string; userId: number }> {
    const user = (await this.userService.getUserByEmail(email)) as User
    const passwordsMatch = await compare(pass, user.password)

    if (!passwordsMatch) {
      throw new UnauthorizedException()
    }
    const payload = { userId: user.id, userName: user.name }
    return {
      userId: user.id,
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10
    const salt = await genSalt(saltRounds)
    return hash(password, salt)
  }
}
