import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/core/repositories/user.repository'
import { UserFactoryService } from './user.factory.service'
import { User } from 'src/core/entities'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'

@Injectable()
export class UserUseCases {
  constructor(
    private user: UserRepository,
    private userFactory: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.user.findAll()
  }

  getUserById(id: string): Promise<User> {
    return this.user.findById(parseInt(id))
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactory.createNewUser(createUserDto)
    return this.user.create(user)
  }

  updateUser(userId: string, updateUserDto: UpdateUserDto) {
    const user = this.userFactory.updateNewUser(updateUserDto)
    return this.user.update(parseInt(userId), user)
  }

  deleteUser(userId: string) {
    return this.user.delete(parseInt(userId))
  }
}
