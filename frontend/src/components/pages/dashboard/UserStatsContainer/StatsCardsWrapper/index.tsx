import UserStatsCard from '@/components/ui/Cards/UserStatsCard'
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