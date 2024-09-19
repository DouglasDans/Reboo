"use server"

import { rebooApiService } from "@/services/rebooAPI"
import { BookStatus } from "@/services/rebooAPI/api.types"
import { redirect } from "next/navigation"

export default async function updateBookStatus(bookId: number, data: FormData) {
  await rebooApiService.updateBookStatus(
    bookId,
    data.get("bookStatus") as BookStatus,
  )

  redirect("./" + bookId)
}
