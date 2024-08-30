import styles from './book-list.module.scss'
import BookListItem from './BookListItem'

type Props = {}

export default function BookList({ }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h5>Titulo da Lista</h5>
      </div>
      <div className={styles.listContent}>
        <BookListItem />
        <BookListItem />
        <BookListItem />
        <BookListItem />
        <BookListItem />
        <BookListItem />
        <BookListItem />
        <BookListItem />
      </div>
    </section>
  )
}