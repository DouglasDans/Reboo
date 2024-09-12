import styles from './index.module.scss'
import { Book } from '@/services/rebooAPI/api.types'
import { convertAuthorsArrayToString, convertStringToDate } from './index.utils'

type Props = {
  book: Book
}

export default function InfoContainer({ book }: Props) {
  return (
    <div className={styles.container}>
      <h5>Informações sobre o livro</h5>

      <div className={styles.wrapper}>

        <div className={styles.inlineWrapper}>

          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Autor</span>
            <span className={styles.itemValue}>{convertAuthorsArrayToString(book.authors)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Data de Publicação</span>
            <span className={styles.itemValue}>{convertStringToDate(book.publicationDate)}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Editora</span>
            <span className={styles.itemValue}>{book.publisher?.name}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>Número de Páginas</span>
            <span className={styles.itemValue}>{book.totalPages}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.itemTitle}>ISBN</span>
            <span className={styles.itemValue}>{`${book.isbn_10}, ${book.isbn_13}`}</span>
          </div>

        </div>

        <div className={styles.infoItem}>
          <span className={styles.itemTitle}>Descrição</span>
          <span className={styles.itemValue}>{book.description}</span>
        </div>
      </div>
    </div>
  )
}