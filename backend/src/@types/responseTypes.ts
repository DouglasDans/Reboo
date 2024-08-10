export type publisherResponse = {
  id: number
}

export type bookResponse = {
  pagesRead?: number
  collectionId?: number
  id: number
}

export type bookSessionResponse = {
  bookId: number
  pagesRead: number
}
