import styles from './book-list.module.scss'
import BookListItem from './BookListItem'

type Props = {
  listTitle: string,
  bookList: Array<object>
}

export default function BookList({ listTitle = "Sem Título" }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h5>{listTitle}</h5>
      </div>
      <div className={styles.listContent}>
        <BookListItem />
      </div>
    </section>
  )
}