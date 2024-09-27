import { BookURLParamsProvider } from "@/context/book/BookURLParamsProvider"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { Metadata } from "next"
import BookSearchAndCoverWrapper from "@/containers/library-page/book-page/add-page/book-search-form-wrapper"
import BookEntryFormWrapper from "@/containers/library-page/book-page/add-page/book-entry-form-wrapper"


export const metadata: Metadata = {
  title: "Adicionar Novo Livro",
}

export default function page({ searchParams }: Params) {
  return (
    <BookURLParamsProvider value={searchParams}>
      <BookSearchAndCoverWrapper />
      <BookEntryFormWrapper />
    </BookURLParamsProvider>
  )
}
