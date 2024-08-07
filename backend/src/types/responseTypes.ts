export type publisherResponse = {
  id: number
}

export type bookResponse = {
  pagesRead?: number
  collectionId
  id: number
}

export type bookSessionResponse = {
  bookId: number
  pagesRead: number
}
