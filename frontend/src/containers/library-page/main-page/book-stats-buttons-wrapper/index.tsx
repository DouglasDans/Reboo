import styles from './index.module.scss'
import { getFirstBookByBookStatus } from '@/services/rebooAPI/api.services'
import ColorButton from '@/components/buttons/color-button'
import Icon from '@/components/icon'
import Link from 'next/link'
import BookCard from '@/components/cards/book-card'

type Props = {
  params: {
    userId: number
  }
}

export default async function BookStatsAndButtons({ params }: Props) {
  const mostRecentInProgressBook = await getFirstBookByBookStatus(params.userId, "IN_PROGRESS")

  return (
    <section className={styles.container}>
      <div className={styles.buttonWrapper}>
        <Link href={"stats/session/add"}>
          <ColorButton value='Nova Sessão' decorator={<Icon name='timer_play' />} />
        </Link>
        <Link href={"library/book/add"}>
          <ColorButton disabled value='Nova Coleção' decorator={<Icon name='timer_play' />} />
        </Link>
        <Link href={"library/book/add"}>
          <ColorButton value='Adicionar Livro' decorator={<Icon name='bookmark_add' />} />
        </Link>
      </div>
      <BookCard book={mostRecentInProgressBook} />
    </section>)
}