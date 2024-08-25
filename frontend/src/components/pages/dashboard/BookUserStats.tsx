import BookCard from '@/components/ui/cards/BookCard'
import styles from './book-user-stats.module.scss'
import StatisticCardsWrapper from './StatisticCardsWrapper'

type Props = {}

export default function BookUserStats({ }: Props) {
  return (
    <section className={styles.bookUserStats}>
      <BookCard />
      <StatisticCardsWrapper />
    </section>
  )
}