import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import GridBookItem from './item'

type Props = {
  books: Book[]
}

export default function BookGridView({ books }: Props) {
  return (
    <div className={styles.content}>
      {books.map(book => {
        return (<GridBookItem book={book} key={book.id} />)
      })}
    </div>
  )
}