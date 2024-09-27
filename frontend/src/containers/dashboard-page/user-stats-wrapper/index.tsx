import BookCard from '@/components/cards/book-card'
import styles from './index.module.scss'
import StatsCardsWrapper from './stats-cards-wrapper'
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