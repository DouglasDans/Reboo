import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import BookGridView from './grid-view'
import BookListView from './list-view'

type Props = {
  title: string
  books: Book[]
}

export default function CollectionBookList({
  title = "Sem Título",
  books
}: Props) {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h5>{title}</h5>
        <div>
          <h6>{`${books.length} Livros`}</h6>
        </div>
      </header>

      <BookGridView books={books} />
      {/* <BookListView books={books} /> */}

    </section>
  )
}