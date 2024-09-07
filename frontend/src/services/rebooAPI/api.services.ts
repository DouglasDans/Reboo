import api from "./api.config"
import { Book } from "./api.types"

export async function getAllBooksAndAuthors(userId: number): Promise<Book[]> {
  return await api.get(`book?userId=${userId}&select=authors`)
}
