import { Author, Collection, Publisher, ReadingSession, User } from '.'
import { BookStatus } from '../enums'

export class Book {
  id: number
  title: string
  isbn_10: string
  isbn_13: string
  totalPages: number
  pagesRead: number
  publicationDate: Date
  description: string
  status: BookStatus
  coverImage: string
  backgroundColors: string
  language: string
  createdAt: Date
  updatedAt: Date
  publisherId: number
  userId: number

  publisher?: Publisher
  user?: User
  authors?: Array<Author>
  collections?: Array<Collection>
  readingSessions?: Array<ReadingSession>
}
