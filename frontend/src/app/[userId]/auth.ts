import { jwtDecode } from "@/lib/jwt.control"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function authorizationControl(id: number) {
  const token = cookies().get("access_token") || null
  if (token) {
    const tokenPayload = await jwtDecode(token.value)

    if (!tokenPayload) {
      redirect(`/login`)
    }
    if (tokenPayload?.userId == id) {
      return true
    }
    redirect(`/not-found`)
  }
  redirect(`/login`)
}

export default authorizationControl
