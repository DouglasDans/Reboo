import api from "./api.config"
import { GoogleBookResponse, ItemResponse, SearchBooksResponse } from "./api.types"

export async function getBookByISBN(isbn: string): Promise<SearchBooksResponse> {
  try {
    return await api.get(`/volumes?q=isbn:${isbn}`)
  } catch (error) {
    throw new Error("Erro")
  }
}

export async function getAllBookData(selfLink: string): Promise<GoogleBookResponse> {
  try {
    const data = (await api.get(selfLink)) as ItemResponse
    return data.volumeInfo
  } catch (error) {
    throw new Error("Ocorreu um erro")
  }
}

export async function getAllBookDataByISBN(
  isbn: string,
): Promise<GoogleBookResponse | null> {
  try {
    const booksByISBN = await getBookByISBN(isbn)
    if (booksByISBN.totalItems === 0) {
      return null
    }
    return await getAllBookData(booksByISBN.items[0].selfLink)
  } catch (error) {
    throw new Error("Ocorreu um erro")
  }
}
