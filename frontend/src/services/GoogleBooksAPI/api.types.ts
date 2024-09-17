export interface SearchBooksResponse {
  totalItems: number
  items: Array<ItemResponse>
}

export interface ItemResponse {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: GoogleBookResponse
}

export interface GoogleBookResponse {
  title: string
  subtitle: string
  authors: Array<string>
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: Array<GoogleISBNResponse>
  pageCount: number
  categories: Array<string>
  language: string
  imageLinks: any
  refreshForm?: boolean
}

export interface GoogleISBNResponse {
  type: string
  identifier: string
}
