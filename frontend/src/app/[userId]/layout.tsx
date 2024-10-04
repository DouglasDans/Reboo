import { UserIdProvider } from "@/context/user/UserIdProvider"
import MainLayout from "@/layout/main-layout"
import { ReactNode } from "react"
import authorizationControl from "./auth"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default async function Layout({ children, params }: Props) {
  if (await authorizationControl(params.userId)) {
    return (
      <UserIdProvider value={params.userId}>
        <MainLayout>
          {children}
        </MainLayout>
      </UserIdProvider>
    )
  }

}
