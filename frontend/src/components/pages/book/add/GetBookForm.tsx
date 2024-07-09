'use client'

import PrimaryButton from '@/components/ui/buttons/PrimaryButton'
import Input from '@/components/ui/forms/Input'
import styles from '@/styles/pages/book/add/get-book-form.module.scss'


type Props = {}

export default function GetBookForm({ }: Props) {

  async function getBookByISBN(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const isbn = event.currentTarget.searchISBN.value

    console.log(isbn);

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