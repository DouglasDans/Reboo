"use server"

type loginData = {
  email: string
  password: string
}

export default async function makeLogin(data: loginData) {
  console.log(data.email, data.password)
}
