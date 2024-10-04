import { jwtDecode } from "@/lib/jwt.control"
import { NextComponentType } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function withAuth(Component: NextComponentType) {
  const token = cookies().get("access_token") || null
  console.log(token)

  if (token) {
    const tokenPayload = await jwtDecode(token.value)

    if (!tokenPayload) {
      return Component
    }
    redirect(`${tokenPayload.userId}/dashboard`)
  }

  return Component
}

export default withAuth
