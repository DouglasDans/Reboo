import { Book } from "@/services/rebooAPI/api.types"

export function fetchDbBookDataToUrlParams(bookData: Book, params: URLSearchParams) {
  const authors = bookData.authors?.reduce((acc, item, index) => {
    return index === 0 ? item.author.name : `${acc}, ${item.author.name}`
  }, "") as string
  const categories = bookData.categories?.reduce((acc, item, index) => {
    return index === 0 ? item.category.name : `${acc}, ${item.category.name}`
  }, "") as string

  if (bookData.title) params.set("title", bookData.title)
  if (authors) params.set("authors", authors)
  if (bookData.publisher && bookData.publisher.name)
    params.set("publisher", bookData.publisher.name)
  if (bookData.publicationDate)
    params.set(
      "publishedDate",
      formatDateForInput(new Date(bookData.publicationDate)),
    )
  if (bookData.totalPages) params.set("pageCount", bookData.totalPages.toString())
  if (bookData.isbn_10 || bookData.isbn_13)
    params.set(
      "industryIdentifiers",
      `${bookData.isbn_10 || ""}, ${bookData.isbn_13 || ""}`,
    )
  if (bookData.description) params.set("description", bookData.description)
  if (categories) params.set("categories", categories)
  if (bookData.language) params.set("language", bookData.language)
  if (bookData.coverImage) params.set("imageLinks", bookData.coverImage)
  if (bookData.highlightColor) params.set("highlightColor", bookData.highlightColor)
}

function formatDateForInput(date: Date) {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, "0") // Mês começa do 0, então somamos 1
  const day = String(date.getUTCDate()).padStart(2, "0") // Certifica-se de que o dia tenha 2 dígitos
  return `${year}-${month}-${day}`
}
