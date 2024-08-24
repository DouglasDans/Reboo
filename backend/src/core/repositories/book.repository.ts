import { Book } from '../entities'

export abstract class BookRepository {
  abstract findAllByUserId(userId: number): Promise<Book[]>

  abstract findById(id: number): Promise<Book>

  abstract findByTitle(title: string): Promise<Book>

  abstract create(item: Book): Promise<Book>

  abstract update(id: number, item: Book): Promise<Book>

  abstract delete(id: number): Promise<Book>
}
