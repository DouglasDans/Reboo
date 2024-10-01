import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import GridBookItem from './item'

type Props = {
  books: Book[],
  listNoWrap?: boolean
}

export default function BookGridView({ books, listNoWrap = false }: Props) {
  return (
    <div className={`${styles.content} ${listNoWrap ? styles.wrap : ""}`}>
      {books.map(book => {
        return (<GridBookItem book={book} key={book.id} />)
      })}
    </div>
  )
}