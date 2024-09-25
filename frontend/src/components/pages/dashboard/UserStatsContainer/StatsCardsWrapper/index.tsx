import UserStatsCard from '@/components/ui/cards/UserStatsCard'
import styles from './index.module.scss'

export default function StatsCardsWrapper() {
  return (
    <div className={styles.wrapperContainer}>
      <UserStatsCard />
      <UserStatsCard />
      <UserStatsCard />
      <UserStatsCard />
    </div>
  )
}