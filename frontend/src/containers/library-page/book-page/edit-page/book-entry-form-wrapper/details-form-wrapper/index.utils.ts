import { Book } from "@/services/rebooAPI/api.types"

export function fetchDbBookDataToUrlParams(bookData: Book, params: URLSearchParams) {
  const authors = bookData.authors?.reduce((acc, item, index) => {
    return index === 0 ? item.author.name : `${acc}, ${item.author.name}`
  }, "") as string
  const categories = bookData.categories?.reduce((acc, item, index) => {
    return index === 0 ? item.category.name : `${acc}, ${item.category.name}`
  }, "") as string

  params.set("title", bookData.title)
  params.set("authors", authors)
  params.set("publisher", bookData.publisher ? bookData.publisher.name : "")
  params.set("publishedDate", formatDateForInput(new Date(bookData.publicationDate)))
  params.set("pageCount", bookData.totalPages.toString())
  params.set("industryIdentifiers", `${bookData.isbn_10}, ${bookData.isbn_13}`)
  params.set("description", bookData.description)
  params.set("categories", categories)
  params.set("language", bookData.language)
  params.set("imageLinks", bookData.coverImage)
  params.set("highlightColor", bookData.highlightColor)
}

function formatDateForInput(date: Date) {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0") // Mês começa do 0, então somamos 1
  const day = String(date.getUTCDate()).padStart(2, "0") // Certifica-se de que o dia tenha 2 dígitos
  return `${year}-${month}-${day}`
}
