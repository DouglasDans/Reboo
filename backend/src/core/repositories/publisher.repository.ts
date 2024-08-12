import { Publisher } from '../entities'

export abstract class PublisherRepository {
  abstract findAll(): Promise<Publisher[]>

  abstract findById(id: number): Promise<Publisher>

  abstract create(item: Publisher): Promise<Publisher>

  abstract update(id: number, item: Publisher): Promise<Publisher>

  abstract delete(id: number): Promise<Publisher>
}
