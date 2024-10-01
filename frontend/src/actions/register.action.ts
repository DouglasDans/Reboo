"use server"

export default async function makeRegister(formData: FormData) {
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  if (!verifyPasswordMatch(password, confirmPassword)) {
    throw new Error("Passwords do not match")
  }
  console.log(password, confirmPassword)
}

function verifyPasswordMatch(password: string, confirmPassword: string): boolean {
  return password === confirmPassword
}
