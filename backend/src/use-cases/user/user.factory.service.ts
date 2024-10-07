import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'
import { User } from 'src/core/entities'
import { AuthService } from '../auth'

@Injectable()
export class UserFactoryService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}
  async createNewUser(createUserDto: CreateUserDto) {
    const user = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.bio = createUserDto.bio
    user.profileImage = createUserDto.profileImage
    user.googleId = createUserDto.google_id
    user.password = await this.authService.hashPassword(createUserDto.password)

    console.log(user.password)

    return user
  }
  updateNewUser(updateUserDto: UpdateUserDto) {
    const user = new User()
    user.name = updateUserDto.name
    user.email = updateUserDto.email
    user.bio = updateUserDto.bio
    user.profileImage = updateUserDto.profileImage
    user.googleId = updateUserDto.google_id

    if (updateUserDto.password) {
      this.authService.hashPassword(updateUserDto.password).then((res) => {
        user.password = res
      })
    }

    return user
  }
}
