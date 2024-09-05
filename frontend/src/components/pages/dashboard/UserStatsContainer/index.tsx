import BookCard from '@/components/ui/Cards/BookCard'
import styles from './index.module.scss'
import StatsCardsWrapper from './StatsCardsWrapper'

export default function UserStatsContainer() {
  return (
    <section className={styles.container}>
      <BookCard />
      <StatsCardsWrapper />
    </section>
  )
}