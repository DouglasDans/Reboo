import BookCard from '@/components/ui/Cards/BookCard'
import styles from './index.module.scss'
import StatsCardsWrapper from './StatsCardsWrapper'
import { getFirstBookByBookStatus } from '@/services/rebooAPI/api.services'

export default async function UserStatsContainer() {
  const mostRecentInProgressBook = await getFirstBookByBookStatus(1, "IN_PROGRESS")

  return (
    <section className={styles.container}>
      <BookCard book={mostRecentInProgressBook} />
      <StatsCardsWrapper />
    </section>
  )
}