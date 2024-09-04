import MainLayout from "@/components/layout/MainLayout"
import React, { PropsWithChildren } from "react"

export default function layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>
}
