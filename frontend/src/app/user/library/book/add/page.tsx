import Header from "@/components/layout/Header"
import FormBookSection from "@/components/pages/book/add/FormBookSection"
import SearchBookAndImgSection from "@/components/pages/book/add/SearchBookAndImgSection"
import { Fragment } from "react"

type Props = {}

export default function page({ }: Props) {

  return (
    <Fragment>
      <Header titlePage="Minha Estante" />

      <SearchBookAndImgSection />
      <FormBookSection />
    </Fragment >
  )
}