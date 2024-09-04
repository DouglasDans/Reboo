import StatisticCard from '@/components/ui/cards/StatisticCard'
import styles from './index.module.scss'

export default function StatsCardsWrapper() {
  return (
    <div className={styles.wrapperContainer}>
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </div>
  )
}