import api from "./api.config"
import { Book } from "./api.types"

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
