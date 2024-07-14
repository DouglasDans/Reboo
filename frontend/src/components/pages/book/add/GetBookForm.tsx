'use client'

import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import googleBooksApi from '@/services/GoogleBooksAPI/api'
import styles from '@/styles/pages/book/add/get-book-form.module.scss'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import toStringISBN from '../../../../utils/isbnHandler';

type Props = {}

export default function GetBookForm({ }: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function getBookByISBN(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const isbnNumber = event.currentTarget.searchISBN.value
    const rawIsbnNumber = isbnNumber.replace(/-/gi, "")

    const res = await googleBooksApi.get(
      '/volumes?q=isbn:' + rawIsbnNumber
    )
    const params = new URLSearchParams(searchParams)

    //@ts-ignore
    const bookInfo = await googleBooksApi.get(res.items[0].selfLink).then(res => { return res.volumeInfo }) as GoogleAPIResponseBook

    params.set("title", bookInfo.title)
    params.set("authors", bookInfo.authors.join(", "))
    params.set("publisher", bookInfo.publisher)
    params.set("publishedDate", bookInfo.publishedDate)
    params.set("pageCount", bookInfo.pageCount.toString())
    params.set("industryIdentifiers", typeof (bookInfo.industryIdentifiers) !== "string" ? toStringISBN(bookInfo.industryIdentifiers) : bookInfo.industryIdentifiers)
    params.set("description", bookInfo.description)
    params.set("refreshForm", 'true')

    if (bookInfo.imageLinks) {
      params.set("imageLinks", bookInfo.imageLinks.medium)
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <form onSubmit={getBookByISBN} method="get">
      <div className={styles.formGroup}>
        <label>ISBN</label>
        <div>
          <input placeholder="978-90-274-3964-2" id="searchISBN" name="searchISBN" />
          <PrimaryButton>Pesquisar por informações</PrimaryButton>
        </div>
      </div>
    </form>
  )
}