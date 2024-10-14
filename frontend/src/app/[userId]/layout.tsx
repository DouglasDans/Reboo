import { UserProvider } from "@/context/user/UserProvider"
import MainLayout from "@/layout/main-layout"
import { ReactNode } from "react"
import { rebooApiService } from "@/services/rebooAPI"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default async function Layout({ children, params }: Props) {
  const user = await rebooApiService.getUserById(params.userId)
  return (
    <UserProvider value={user}>
      <MainLayout>
        {children}
      </MainLayout>
    </UserProvider>
  )
}
