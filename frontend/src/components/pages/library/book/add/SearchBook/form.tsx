'use client'

import styles from './form.module.scss'
import { googleBooksService } from "@/services/GoogleBooksAPI"
import { formatISBN, setBookDataToParams } from './form.utils'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import Button from '@/components/ui/buttons/button'

export default function SearchBookForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function fetchBook(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const params = new URLSearchParams(searchParams)
    const formDataIsbn = event.currentTarget.searchISBN.value
    const isbnNumber = formatISBN(formDataIsbn)
    const bookData = await googleBooksService.getAllBookDataByISBN(isbnNumber)

    if (!bookData) {
      return alert(
        "ISBN não encontrado - Verifique se ele foi digitado corretamente",
      )
    }

    setBookDataToParams(bookData, params)

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <form onSubmit={fetchBook}>
      <div className={styles.formGroup}>
        <label>ISBN</label>
        <div>
          <input
            placeholder="978-90-274-3964-2"
            id="searchISBN"
            name="searchISBN"
          />
          <Button>Pesquisar por informações</Button>
        </div>
      </div>
    </form>
  )
}