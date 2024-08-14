import { Injectable } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'
import { User } from 'src/core/entities'

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const user = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.password = createUserDto.password
    user.bio = createUserDto.bio
    user.profileImage = createUserDto.profileImage
    user.googleId = createUserDto.google_id

    return user
  }
  updateNewUser(updateUserDto: UpdateUserDto) {
    const user = new User()
    user.name = updateUserDto.name
    user.email = updateUserDto.email
    user.password = updateUserDto.password
    user.bio = updateUserDto.bio
    user.profileImage = updateUserDto.profileImage
    user.googleId = updateUserDto.google_id

    return user
  }
}
