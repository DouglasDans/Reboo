import BookCard from '@/components/ui/cards/BookCard'
import styles from './index.module.scss'
import StatsCardsWrapper from './StatsCardsWrapper'
import { getFirstBookByBookStatus } from '@/services/rebooAPI/api.services'

type Props = {
  params: {
    userId: number
  }
}

export default async function UserStatsContainer({ params }: Props) {
  const mostRecentInProgressBook = await getFirstBookByBookStatus(params.userId, "IN_PROGRESS")

  return (
    <section className={styles.container}>
      <BookCard book={mostRecentInProgressBook} />
      <StatsCardsWrapper />
    </section>
  )
}