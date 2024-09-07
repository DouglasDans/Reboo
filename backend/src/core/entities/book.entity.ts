import { Author, Collection, Publisher, ReadingSession, User } from '.'
import { BookStatus } from '../enums'
import { Category } from './category.entity'

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
  authors?: Array<{ author: Author }>
  categories?: Array<{ category: Category }>
  collections?: Array<Collection>
  readingSessions?: Array<ReadingSession>
}
