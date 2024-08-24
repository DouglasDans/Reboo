import { User } from '../entities'

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>

  abstract findById(id: number): Promise<User>

  abstract create(item: User): Promise<User>

  abstract update(id: number, item: User): Promise<User>

  abstract delete(id: number): Promise<User>
}
