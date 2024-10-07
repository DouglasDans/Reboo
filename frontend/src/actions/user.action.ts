"use server"

import { cookies } from "next/headers"
import { rebooApiService } from "@/services/rebooAPI"
import { redirect } from "next/navigation"

type loginData = {
  email: string
  password: string
}

export default async function makeLogin(data: loginData) {
  cookies().delete("access_token")
  const login = await rebooApiService.loginUser(data.email, data.password)

  cookies().set({
    name: "access_token",
    value: login.access_token,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14, // 14 dias
    path: "/",
  })

  redirect(`${login.userId}/dashboard`)
}
