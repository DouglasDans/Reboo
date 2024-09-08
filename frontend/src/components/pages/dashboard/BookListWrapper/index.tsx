import BookList from "@/components/ui/lists/BookList"
import { getAllBooksByBookStatus } from "@/services/rebooAPI/api.services"
import { Fragment } from "react"

type Props = {
  params: {
    userId: number
  }
}

export default async function BookListWrapper({ params }: Props) {
  const inProgressBooks = await getAllBooksByBookStatus(params.userId, "IN_PROGRESS")
  const notStartedBooks = await getAllBooksByBookStatus(params.userId, "NOT_STARTED")
  return (
    <Fragment>
      <BookList listTitle="Lendo Agora" bookList={inProgressBooks} />
      <BookList listTitle="Próximas Leituras" bookList={notStartedBooks} />
    </Fragment>
  )
}