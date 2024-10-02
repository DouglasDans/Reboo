import { Injectable } from '@nestjs/common'
import { UserRepository } from 'src/core/repositories/user.repository'
import { UserFactoryService } from './user.factory.service'
import { User } from 'src/core/entities'
import { CreateUserDto, UpdateUserDto } from 'src/core/dtos'

@Injectable()
export class UserService {
  constructor(
    private user: UserRepository,
    private userFactory: UserFactoryService,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.user.findAll()
  }

  getUserById(id: number): Promise<User> {
    return this.user.findById(id)
  }

  getUserByEmail(email: string): Promise<User> {
    return this.user.findByEmail(email)
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactory.createNewUser(createUserDto)
    return this.user.create(user)
  }

  updateUser(userId: number, updateUserDto: UpdateUserDto) {
    const user = this.userFactory.updateNewUser(updateUserDto)
    return this.user.update(userId, user)
  }

  deleteUser(userId: number) {
    return this.user.delete(userId)
  }
}
