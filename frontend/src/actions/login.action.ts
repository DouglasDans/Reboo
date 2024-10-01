"use server"

export default async function makeLogin(formData: FormData) {
  console.log(formData.get("email"), formData.get("password"))
}
