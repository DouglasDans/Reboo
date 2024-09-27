import React, { Fragment } from "react"
import { Metadata } from "next"
import UserStatsContainer from "@/containers/dashboard-page/user-stats-wrapper"
import BookListWrapper from "@/containers/dashboard-page/book-list-wrapper"

export const metadata: Metadata = {
  title: "Dashboard",
}

type Props = {
  params: {
    userId: number
  }
}

export default function Dashboard({ params }: Props) {
  return (
    <Fragment>
      <UserStatsContainer params={params} />
      <BookListWrapper params={params} />
    </Fragment>
  )
}
