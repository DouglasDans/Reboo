import BookCard from '@/components/ui/cards/BookCard'
import styles from '@/styles/pages/dashboard/book-user-stats.module.scss'

type Props = {}

export default function BookUserStats({ }: Props) {
  return (
    <section className={styles.bookUserStats}>
      <BookCard />
      <div>dasndo</div>
    </section>
  )
}