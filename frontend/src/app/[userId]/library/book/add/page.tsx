import Header from "@/components/layout/Header"
import FormBookSection from "@/components/pages/library/book/add/Form/FormBookContainer"
import SearchBookAndImgSection from "@/components/pages/library/book/add/SearchBookAndImgSection"
import { BookURLParamsProvider } from "@/context/book/BookURLParamsProvider"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { Metadata } from "next"
import SearchBookAndCoverImageWrapper from "@/components/pages/library/book/add/SearchBookAndCoverImageWrapper"

export const metadata: Metadata = {
  title: "Adicionar Novo Livro",
}

export default function page({ searchParams }: Params) {
  return (
    <BookURLParamsProvider value={searchParams}>
      <Header titlePage="Minha Estante" />
      <SearchBookAndCoverImageWrapper />
      <FormBookSection />
    </BookURLParamsProvider>
  )
}
