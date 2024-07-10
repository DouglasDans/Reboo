import Header from "@/components/layout/Header"
import FormBookSection from "@/components/pages/book/add/FormBookSection"
import SearchBookAndImgSection from "@/components/pages/book/add/SearchBookAndImgSection"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { Fragment } from "react"



export default function page({ searchParams }: Params) {
  console.log(searchParams);

  return (
    <Fragment>
      <Header titlePage="Minha Estante" />

      <SearchBookAndImgSection />
      <FormBookSection book={searchParams} />
    </Fragment >
  )
}