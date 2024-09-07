import BookList from "@/components/ui/lists/BookList"
import { getAllBooksAndAuthors } from "@/services/rebooAPI/api.services"
import { Fragment } from "react"


export default async function BookListWrapper() {
  const data = await getAllBooksAndAuthors(1)
  return (
    <Fragment>
      <BookList listTitle="Lendo Agora" bookList={data} />
      <BookList listTitle="Próximas Leituras" bookList={data} />
    </Fragment>
  )
}