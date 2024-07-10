import styles from '@/styles/ui/forms/input-wrapper.module.scss'
import Input from './Input'
import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { ResponseBook } from '@/types/googleBooksApiTypes'
type Props = {
  book: ResponseBook
}

export default function InputWrapper({ book }: Props) {
  console.log(book)
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <label>Nome</label>
        <Input defaultValue={book.title} placeholder="978-90-274-3964-2" id="nomeBook" name="nomeBook" />
      </div>
      <div className={styles.input}>
        <label>Autor</label>
        <Input placeholder="978-90-274-3964-2" id="autorNook" name="autorNook" />
      </div>

      <div className={styles.inputWrapperGrid}>
        <div className={styles.input}>
          <label>Data de Publicação</label>
          <Input defaultValue={book.publishedDate} type='date' placeholder="978-90-274-3964-2" id="publiDataBook" name="publiDataBook" />
        </div>
        <div className={styles.input}>
          <label>Editora</label>
          <Input defaultValue={book.publisher} placeholder="978-90-274-3964-2" id="editoraBook" name="editoraBook" />
        </div>
        <div className={styles.input}>
          <label>Número de páginas</label>
          <Input defaultValue={book.pageCount} placeholder="978-90-274-3964-2" id="pagBook" name="pagBook" />
        </div>
        <div className={styles.input}>
          <label>ISBN</label>
          <Input placeholder="978-90-274-3964-2" id="isbnBook" name="isbnBook" />
        </div>
      </div>

      <div className={styles.input}>
        <label>Descrição</label>
        <textarea defaultValue={book.description} placeholder="978-90-274-3964-2" id="descBook" name="descBook" />
      </div>

    </div>
  )
}