import { Book } from '.'

export class Category {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}
