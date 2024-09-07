import BookList from "@/components/ui/lists/BookList"
import { getAllBooksByBookStatus } from "@/services/rebooAPI/api.services"
import { Fragment } from "react"


export default async function BookListWrapper() {
  const inProgressBooks = await getAllBooksByBookStatus(1, "IN_PROGRESS")
  const notStartedBooks = await getAllBooksByBookStatus(1, "NOT_STARTED")
  return (
    <Fragment>
      <BookList listTitle="Lendo Agora" bookList={inProgressBooks} />
      <BookList listTitle="Próximas Leituras" bookList={notStartedBooks} />
    </Fragment>
  )
}