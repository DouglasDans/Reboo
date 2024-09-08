import React, { Fragment } from "react"
import { Metadata } from "next"
import BookListWrapper from "@/components/pages/dashboard/BookListWrapper"
import UserStatsContainer from "@/components/pages/dashboard/UserStatsContainer"

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
