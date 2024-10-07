import api from "./api.config"
import { Book, BookStatus } from "./api.types"

export async function loginUser(
  email: string,
  password: string,
): Promise<{ access_token: string; userId: number }> {
  return await api.post("auth", {
    email,
    password,
  })
}

export async function createUser(data: {
  name: string
  email: string
  password: string
}) {
  return await api.post("user", data)
}

export async function getAllBooksAndAuthors(userId: number): Promise<Book[]> {
  return await api.get(`book?userId=${userId}&select=authors`)
}

export async function getAllBooksByBookStatus(
  userId: number,
  status: string,
): Promise<Book[]> {
  return await api.get(`book?userId=${userId}&status=${status}`)
}

export async function getFirstBookByBookStatus(
  userId: number,
  status: string,
): Promise<Book> {
  return await api.get(`book?userId=${userId}&status=${status}&onlyFirst=true`)
}

export async function getBookById(id: number): Promise<Book> {
  return await api.get(`/book/${id}`)
}

export async function createBook(bookData: any): Promise<Book> {
  return await api.post("/book", bookData)
}

export async function updateBook(bookId: number, bookData: any): Promise<Book> {
  return await api.patch(`/book/${bookId}`, bookData)
}

export async function updateBookHighlightColor(
  bookId: number,
  hexColor: string,
): Promise<Book> {
  return await api.patch(
    `/book/${bookId}?highlightColor=${hexColor.replace("#", "%23")}`,
  )
}

export async function updateBookStatus(
  bookId: number,
  bookStatus: BookStatus,
): Promise<Book> {
  return await api.patch(`/book/${bookId}?bookStatus=${bookStatus}`)
}

export async function deleteBook(bookId: number): Promise<Book> {
  return await api.delete(`/book/${bookId}`)
}
