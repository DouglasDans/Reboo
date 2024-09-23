import BookCard from '@/components/ui/Cards/BookCard'
import styles from './index.module.scss'
import { getFirstBookByBookStatus } from '@/services/rebooAPI/api.services'
import ColorButton from '@/components/ui/buttons/color-button'
import Icon from '@/components/ui/Icon'
import Link from 'next/link'

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
        <ColorButton value='Nova Sessão' decorator={<Icon name='timer_play' />} />

        <ColorButton disabled value='Nova Coleção' decorator={<Icon name='timer_play' />} />

        <Link href={"library/book/add"}>
          <ColorButton value='Adicionar Livro' decorator={<Icon name='bookmark_add' />} />
        </Link>
      </div>
      <BookCard book={mostRecentInProgressBook} />
    </section>)
}