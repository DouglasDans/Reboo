import LibraryPage from "@/containers/library-page/main-page"
import { Metadata } from "next"

type Props = {
  params: {
    userId: number
  }
}

export const metadata: Metadata = {
  title: "Minha Estante",
}

export default function page({ params }: Props) {
  return (
    <LibraryPage params={params} />
  )
}