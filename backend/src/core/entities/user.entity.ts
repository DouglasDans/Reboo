import { Book, Collection, readingSession } from '.'

export class User {
  id: number
  name: string
  email: string
  password: string
  bio?: string
  profileImage?: string
  googleId?: string
  createdAt: Date
  updatedAt: Date

  readingSessions?: Array<readingSession>
  collections?: Array<Collection>
  books?: Array<Book>
}
