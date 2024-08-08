import { redirect } from "next/navigation"

export default function Home() {
  redirect("/1")
  return <h1>Reboo Hello World</h1>
}
