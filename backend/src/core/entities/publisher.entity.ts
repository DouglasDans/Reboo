import { Book } from './'

export class Publisher {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}
