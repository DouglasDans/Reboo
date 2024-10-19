"use server"

import { rebooApiService } from "@/services/rebooAPI"
import { BookDataRequest } from "@/services/rebooAPI/api.types"
import { redirect } from "next/navigation"

export async function createBook(formData: FormData) {
  "use server"

  const bookData: BookDataRequest = {
    userId: Number.parseInt(formData.get("bookUser") as string),
    title: formData.get("bookName") as string,
    totalPages: Number.parseInt(formData.get("bookTotalPages") as string),
    author: (formData.get("bookAuthors") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,

    pagesRead: Number.parseInt(formData.get("bookReadPages") as string),
    status: formData.get("bookStatus") as string,

    publisher: formData.get("bookPublisher")
      ? (formData.get("bookPublisher") as string)
      : null,
    highlightColor: formData.get("bookHighlightColor")
      ? (formData.get("bookHighlightColor") as string)
      : null,
    coverImage: formData.get("bookCoverImage")
      ? (formData.get("bookCoverImage") as string)
      : null,
    language: formData.get("bookLanguage")
      ? (formData.get("bookLanguage") as string)
      : null,
    description: formData.get("bookDescription")
      ? (formData.get("bookDescription") as string)
      : null,
    publicationDate: formData.get("bookPublicationDate")
      ? new Date(formData.get("bookPublicationDate") as string).toISOString()
      : null,

    isbn_10: formData.get("bookISBN")
      ? (formData.get("bookISBN") as string).replace(/\s+/g, "").split(",")[0] ||
        null
      : null,

    isbn_13: formData.get("bookISBN")
      ? (formData.get("bookISBN") as string).replace(/\s+/g, "").split(",")[1] ||
        null
      : null,

    category: formData.get("bookCategories")
      ? ((formData.get("bookCategories") as string)
          .replaceAll(/\s*,\s*/g, ",")
          .split(",") as Array<string>)
      : null,
  }

  const book = await rebooApiService.createBook(bookData)

  redirect("../../library/book/" + book.id)
}

export default async function updateBook(formData: FormData) {
  "use server"

  const bookData: BookDataRequest = {
    userId: Number.parseInt(formData.get("bookUser") as string),
    id: formData.get("bookId") as string,
    title: formData.get("bookName") as string,
    totalPages: Number.parseInt(formData.get("bookTotalPages") as string),
    author: (formData.get("bookAuthors") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,

    pagesRead: Number.parseInt(formData.get("bookReadPages") as string),
    status: formData.get("bookStatus") as string,

    publisher: formData.get("bookPublisher")
      ? (formData.get("bookPublisher") as string)
      : null,
    highlightColor: formData.get("bookHighlightColor")
      ? (formData.get("bookHighlightColor") as string)
      : null,
    coverImage: formData.get("bookCoverImage")
      ? (formData.get("bookCoverImage") as string)
      : null,
    language: formData.get("bookLanguage")
      ? (formData.get("bookLanguage") as string)
      : null,
    description: formData.get("bookDescription")
      ? (formData.get("bookDescription") as string)
      : null,
    publicationDate: formData.get("bookPublicationDate")
      ? new Date(formData.get("bookPublicationDate") as string).toISOString()
      : null,

    isbn_10: formData.get("bookISBN")
      ? (formData.get("bookISBN") as string).replace(/\s+/g, "").split(",")[0] ||
        null
      : null,

    isbn_13: formData.get("bookISBN")
      ? (formData.get("bookISBN") as string).replace(/\s+/g, "").split(",")[1] ||
        null
      : null,

    category: formData.get("bookCategories")
      ? ((formData.get("bookCategories") as string)
          .replaceAll(/\s*,\s*/g, ",")
          .split(",") as Array<string>)
      : null,
  }

  if (bookData.id) {
    const book = await rebooApiService.updateBook(parseInt(bookData.id), bookData)
    redirect("../../book/" + book.id)
  }
}

export async function deleteBook(bookId: number) {
  const book = await rebooApiService.deleteBook(bookId)
  return book
}
