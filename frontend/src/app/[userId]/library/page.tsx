import LibraryPage from "@/containers/library-page/main-page"

type Props = {
  params: {
    userId: number
  }
}

export default function page({ params }: Props) {
  return (
    <LibraryPage params={params} />
  )
}