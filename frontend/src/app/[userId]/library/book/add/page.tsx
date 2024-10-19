import { BookURLParamsProvider } from "@/context/book/BookURLParamsProvider"
import { Metadata } from "next"
import BookSearchAndCoverWrapper from "@/containers/library-page/book-page/add-page/book-search-form-wrapper"
import BookEntryFormWrapper from "@/containers/library-page/book-page/add-page/book-entry-form-wrapper"

export const metadata: Metadata = {
  title: "Adicionar Novo Livro",
}

export default function page({ searchParams }: {
  searchParams: { [key: string]: string | string[] | undefined } | string;
}) {
  return (
    <BookURLParamsProvider value={searchParams}>
      <BookSearchAndCoverWrapper />
      <BookEntryFormWrapper />
    </BookURLParamsProvider>
  )
}
