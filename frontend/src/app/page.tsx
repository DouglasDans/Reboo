import { redirect } from "next/navigation"

export default function Home() {
  redirect("/1/dashboard")
  return <h1>Reboo Hello World</h1>
}
