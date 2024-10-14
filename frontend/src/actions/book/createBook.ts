import { rebooApiService } from "@/services/rebooAPI"
import { redirect } from "next/navigation"

export default async function createBook(formData: FormData) {
  "use server"

  const bookData = {
    title: formData.get("bookName") as string,
    totalPages: Number.parseInt(formData.get("bookTotalPages") as string),
    pagesRead: Number.parseInt(formData.get("bookReadPages") as string),
    publisher: formData.get("bookPublisher") as string,
    status: formData.get("bookStatus") as string,
    highlightColor: formData.get("bookHighlightColor") || null,
    coverImage: formData.get("bookCoverImage") || null,
    language: formData.get("bookLanguage") as string,
    userId: Number.parseInt(formData.get("bookUser") as string),
    description: formData.get("bookDescription") as string,

    publicationDate: new Date(
      formData.get("bookPublicationDate") as string,
    ).toISOString(),

    isbn_10:
      (
        (formData.get("bookISBN") as string)
          .replace(/\s+/g, "")
          .split(",") as Array<string>
      )[0] || null,

    isbn_13:
      (
        (formData.get("bookISBN") as string)
          .replace(/\s+/g, "")
          .split(",") as Array<string>
      )[1] || null,

    author: (formData.get("bookAuthors") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,

    category: (formData.get("bookCategories") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,
  }

  const book = await rebooApiService.createBook(bookData)

  redirect("../../library/book/" + book.id)
}
