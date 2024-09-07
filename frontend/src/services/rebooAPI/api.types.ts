export interface Book {
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
  highlightColor: string
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

export interface Author {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}

export interface Publisher {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date

  books?: Array<Book>
}

export interface Collection {
  id: number
  name: string
  backgroundColors: string
  createdAt: Date
  updatedAt: Date
  userId: number

  books?: Array<Book>
  user?: Array<User>
}

export interface ReadingSession {
  id: number
  startDate: Date
  endDate: Date
  pagesRead: number
  createdAt: Date
  updatedAt: Date
  bookId: number
  userId: number

  book?: Book
  user?: User
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  bio?: string
  profileImage?: string
  googleId?: string
  createdAt: Date
  updatedAt: Date

  readingSessions?: Array<ReadingSession>
  collections?: Array<Collection>
  books?: Array<Book>
}

export enum BookStatus {
  BUY = "BUY",
  NOT_STARTED = "NOT_STARTED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  GIVEN_UP = "GIVEN_UP",
}
