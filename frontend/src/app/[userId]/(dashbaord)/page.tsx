import React, { Fragment } from "react"
import { Metadata } from "next"
import BookListWrapper from "@/components/pages/dashboard/BookListWrapper"
import UserStatsContainer from "@/components/pages/dashboard/UserStatsContainer"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function Dashboard() {
  return (
    <Fragment>
      <UserStatsContainer />
      <BookListWrapper />
    </Fragment>
  )
}
