import BookStatsAndButtons from "@/containers/library-page/main-page/book-stats-buttons-wrapper"
import { Fragment } from "react"

type Props = {
  params: {
    userId: number
  }
}

export default function page({ params }: Props) {
  return (
    <Fragment>
      <BookStatsAndButtons params={params} />
    </Fragment>
  )
}