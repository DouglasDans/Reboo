import rebooAPI from "@/services/rebooAPI/api"

export default async function postBook(formData: FormData) {
  "use server"

  const bookData = {
    title: formData.get("nomeBook") as string,
    totalPages: formData.get("pagBook") as string,
    pagesRead: 0,
    publisher: formData.get("editoraBook") as string,
    status: formData.get("bookStatus") as string,
    backgroundColors: null,
    language: formData.get("idiomaBook") as string,
    userId: 1,
    description: formData.get("descBook") as string,

    publicationDate: new Date(
      formData.get("publiDataBook") as string,
    ).toISOString(),

    isbn_10:
      (
        (formData.get("isbnBook") as string)
          .replace(/\s+/g, "")
          .split(",") as Array<string>
      )[0] || null,

    isbn_13:
      (
        (formData.get("isbnBook") as string)
          .replace(/\s+/g, "")
          .split(",") as Array<string>
      )[1] || null,

    author: (formData.get("autorBook") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,

    categorias: (formData.get("categoriasBook") as string)
      .replaceAll(/\s*,\s*/g, ",")
      .split(",") as Array<string>,
  }
  console.log(bookData)

  await rebooAPI.post("/book", bookData)
}
