import { Category } from '../entities'

export abstract class CategoryRepository {
  abstract findAll(): Promise<Category[]>

  abstract findById(id: number): Promise<Category>

  abstract create(item: Category): Promise<Category>

  abstract update(id: number, item: Category): Promise<Category>

  abstract delete(id: number): Promise<Category>
}
