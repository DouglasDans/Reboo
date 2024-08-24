import { Author } from '../entities'

export abstract class AuthorRepository {
  abstract findAll(): Promise<Author[]>

  abstract findById(id: number): Promise<Author>

  abstract findByName(name: string): Promise<Author>

  abstract create(item: Author): Promise<Author>

  abstract update(id: number, item: Author): Promise<Author>

  abstract delete(id: number): Promise<Author>
}
