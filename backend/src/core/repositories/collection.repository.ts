import { Collection } from '../entities'

export abstract class CollectionRepository {
  abstract findAll(): Promise<Collection[]>

  abstract findById(id: number): Promise<Collection>

  abstract create(item: Collection): Promise<Collection>

  abstract update(id: number, item: Collection): Promise<Collection>

  abstract delete(id: number): Promise<Collection>
}
