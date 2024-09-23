import { redirect } from "next/navigation"

export default function page() {
  redirect("/1/dashboard")
  return (
    <div>Login</div>
  )
}