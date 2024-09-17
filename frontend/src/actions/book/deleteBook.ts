"use server"

import { rebooApiService } from "@/services/rebooAPI"

export async function deleteBook(bookId: number) {
  const book = await rebooApiService.deleteBook(bookId)
  return book
}
