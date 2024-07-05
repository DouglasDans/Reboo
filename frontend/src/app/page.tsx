import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/user')
  return <h1>Reboo Hello World</h1>
}
