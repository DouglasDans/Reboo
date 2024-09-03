import { GoogleBookResponse } from "@/services/GoogleBooksAPI/api.types"
import toStringISBN from "@/utils/isbnHandler"

export function formatISBN(isbn: string): string {
  return isbn.replace(/-/gi, "")
}

export function setBookDataToParams(
  bookData: GoogleBookResponse,
  params: URLSearchParams,
): void {
  bookData.title ? params.set("title", bookData.title) : ""
  bookData.authors ? params.set("authors", bookData.authors.join(", ")) : ""
  bookData.publisher ? params.set("publisher", bookData.publisher) : ""
  bookData.publishedDate ? params.set("publishedDate", bookData.publishedDate) : ""
  bookData.pageCount ? params.set("pageCount", bookData.pageCount.toString()) : ""
  bookData.industryIdentifiers
    ? params.set(
        "industryIdentifiers",
        typeof bookData.industryIdentifiers !== "string"
          ? toStringISBN(bookData.industryIdentifiers)
          : bookData.industryIdentifiers,
      )
    : ""
  bookData.description ? params.set("description", bookData.description) : ""
  bookData.categories ? params.set("categories", bookData.categories.join(", ")) : ""
  bookData.language ? params.set("language", bookData.language) : ""
  params.set("refreshForm", "true")

  if (bookData.imageLinks) {
    params.set("imageLinks", bookData.imageLinks.medium)
  } else {
    params.delete("imageLinks")
  }
}
