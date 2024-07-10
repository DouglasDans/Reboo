export interface ResponseBook {
  title: string
  subtitle: string
  authors: Array<string> | string
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: Array<Object>
  pageCount: number
  categories: Array<string>
  language: string
}
