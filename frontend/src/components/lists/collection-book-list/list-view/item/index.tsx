import Icon from '@/components/icon'
import styles from './index.module.scss'
import { Book } from '@/services/rebooAPI/api.types'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function ListBookItem({ book }: Props) {
  return (
    <Link href={`./library/book/${book.id}`} className={styles.container}>
      <div className={styles.title}>
        <Icon name='book' color={book.highlightColor} />
        <span>{book.title}</span>
      </div>
      <span className={styles.author}>{book.authors?.length ? book.authors[0].author.name : ""}</span>
    </Link>
  )
}