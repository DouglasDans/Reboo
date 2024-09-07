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
