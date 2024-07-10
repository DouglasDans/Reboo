'use client'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import Input from '@/components/ui/forms/Input'
import googleBooksApi from '@/services/GoogleBooksAPI/api'
import styles from '@/styles/pages/book/add/get-book-form.module.scss'
import { ResponseBook } from '@/types/googleBooksApiTypes'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


type Props = {}

export default function GetBookForm({ }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function getBookByISBN(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const res = await googleBooksApi.get(
      '/volumes?q=isbn:' + event.currentTarget.searchISBN.value,
    )
    const params = new URLSearchParams(searchParams)

    //@ts-ignore
    const bookInfo = await googleBooksApi.get(res.items[0].selfLink).then(res => { return res.volumeInfo }) as ResponseBook

    console.log(bookInfo);


    params.set("title", bookInfo.title)
    params.set("authors", bookInfo.authors[0])
    params.set("publisher", bookInfo.publisher)
    params.set("publishedDate", bookInfo.publishedDate)
    params.set("pageCount", bookInfo.pageCount.toString())
    params.set("description", bookInfo.description)

    replace(`${pathname}?${params.toString()}`)
  }



  return (
    <form onSubmit={getBookByISBN} method="get">
      <div className={styles.formGroup}>
        <label>ISBN</label>
        <div>
          <Input placeholder="978-90-274-3964-2" id="searchISBN" name="searchISBN" />
          <PrimaryButton>Pesquisar por informações</PrimaryButton>
        </div>
      </div>
    </form>
  )
}