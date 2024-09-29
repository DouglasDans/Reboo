import styles from './index.module.scss'
import Icon from '@/components/icon'
import Button from '../../buttons/button'
import { Book } from '@/services/rebooAPI/api.types'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function BookCard({ book }: Props) {
  const percentPages: number = (book.pagesRead / book.totalPages) * 100

  return (
    <div className={styles.cardContainer} style={{ backgroundColor: book.highlightColor }}>
      <div className={styles.cardContent} >
        <div>
          <span>Leitura mais recente</span>
          <h4>{book.title}</h4>
        </div>
        <div>
          <span>{percentPages.toFixed(0)}% Concluído</span>
          <span>{book.pagesRead} / {book.totalPages} Páginas Lidas</span>
        </div>
        <Button textColor={book.highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
      </div>
      <Link href={`/${book.userId}/library/book/${book.id}`}>
        <img className={styles.imageElement} src={book.coverImage ? book.coverImage : "/book-image-placeholder.png"} alt="" />
      </Link>
    </div >
  )
}