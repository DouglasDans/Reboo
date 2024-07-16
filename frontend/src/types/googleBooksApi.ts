export interface GoogleAPIResponseBook {
  title: string
  subtitle: string
  authors: Array<string>
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: Array<GoogleAPIResponseISBN>
  pageCount: number
  categories: Array<string>
  language: string
  imageLinks: any
  refreshForm?: boolean
}

export interface GoogleAPIResponseISBN {
  type: string
  identifier: string
}

export interface APIResponse{
  totalItems: number
  items: Array<GoogleAPIResponseBook>
}
