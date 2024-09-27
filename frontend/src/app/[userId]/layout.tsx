import { UserIdProvider } from "@/context/user/UserIdProvider"
import MainLayout from "@/layout/main-layout"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default function Layout({ children, params }: Props) {
  return (
    <UserIdProvider value={params.userId}>
      <MainLayout>
        {children}
      </MainLayout>
    </UserIdProvider>
  )
}
