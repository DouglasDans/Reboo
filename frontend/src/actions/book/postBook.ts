export default async function postBook(formData: FormData) {
  "use server"

  const bookData = {
    nome: formData.get("nomeBook") as string,
    autor: formData.get("autorBook") as string,
    publishedDate: formData.get("publiDataBook") as string,
    publisher: formData.get("editoraBook") as string,
    numPag: formData.get("pagBook") as string,
    isbn: formData.get("isbnBook") as string,
    categorias: formData.get("categoriasBook") as string,
    idioma: formData.get("idiomaBook") as string,
    descricao: formData.get("descBook") as string,
    situacao: formData.get("bookStatus") as string,
  }
  // console.log(formData)
  console.log(bookData)
}
