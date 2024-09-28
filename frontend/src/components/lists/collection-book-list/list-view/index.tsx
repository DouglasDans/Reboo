import styles from './index.module.scss'
import ListBookItem from './item'

type Props = {
  books: Book[]
}

export default function BookListView({ books }: Props) {
  return (
    <div className={styles.content}>
      {books.map(book => {
        return (<ListBookItem book={book} key={book.id} />)
      })}
    </div>
  )
}