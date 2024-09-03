import BookList from "@/components/ui/lists/BookList"
import axios from "axios"
import { Fragment } from "react"


export default async function BookListWrapper() {
  const data = await axios.get("http://backend:8080/api/v1/book?userId=1")
  return (
    <Fragment>
      <BookList listTitle="Sem Título" bookList={data.data} />
    </Fragment>
  )
}