import BookStatsAndButtons from "@/components/pages/library/main/BookStatsAndButtons"
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