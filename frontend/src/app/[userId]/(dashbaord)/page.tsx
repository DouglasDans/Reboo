import Header from "@/components/layout/Header"
import React, { Fragment } from "react"
import { Metadata } from "next"
import BookUserStats from "@/components/pages/dashboard/BookUserStats"
import BookList from "@/components/ui/lists/BookList"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function Dashboard() {
  return (
    <Fragment>
      <Header titlePage="Dashboard" />
      <BookUserStats />
      <BookList />
    </Fragment>
  )
}
