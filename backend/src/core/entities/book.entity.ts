import { Author, Collection, Publisher, readingSession, User } from '.'

export class Book {
  id: number
  title: string
  isbn_10: string
  isbn_13: string
  totalPages: number
  pagesRead: number
  publicationDate: Date
  description: string
  status: bookStatus
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
  readingSessions?: Array<readingSession>
}

enum bookStatus {
  BUY = 'BUY',
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  GIVEN_UP = 'GIVEN_UP',
}
