"use server"

import { cookies } from "next/headers"
import { rebooApiService } from "@/services/rebooAPI"
import { redirect } from "next/navigation"

type loginData = {
  email: string
  password: string
}

type registerData = {
  name: string
  email: string
  password: string
}

export async function makeLogin(data: loginData) {
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

export async function makeRegister(data: registerData) {
  const createdUser = await rebooApiService.createUser({
    name: data.name,
    email: data.email,
    password: data.password,
  })
}

export async function logout() {
  "use server"

  cookies().delete("access_token")
  redirect("/")
}
