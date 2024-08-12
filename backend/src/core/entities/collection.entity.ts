import { Book, User } from '.'

export class Collection {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
  userId: number

  books?: Array<Book>
  user?: Array<User>
}
