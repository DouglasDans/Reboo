import Link from 'next/link'
import styles from './index.module.scss'
import { Book } from '@/services/rebooAPI/api.types'

type Props = {
  book: Book
}

export default function GridBookItem({ book }: Props) {
  return (
    <Link href={`./library/book/${book.id}`} className={styles.content}>
      <div className={styles.bookCoverImage}>
        <img className={styles.coverImage} src={book.coverImage ? book.coverImage : "/book-image-placeholder.png"} alt="" />
      </div>
      <div className={styles.bookCoverInfo}>
        <small className={styles.authorName}>{book.authors?.length ? book.authors[0].author?.name : ""}</small>
        <h6 className={styles.bookTitle}>{book.title}</h6>
      </div>
    </Link>
  )
}