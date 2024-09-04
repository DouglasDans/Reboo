import MainLayout from "@/components/layout/MainLayout"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default function Layout({ children, params }: Props) {
  return (
    <MainLayout params={params}>
      {children}
    </MainLayout>
  )
}
