import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from '../user'
import { User } from 'src/core/entities'

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string): Promise<User> {
    const user = await this.userService.getUserByEmail(email)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    const { password, ...result } = user as User
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result
  }
}
