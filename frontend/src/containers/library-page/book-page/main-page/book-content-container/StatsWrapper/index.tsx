import UserStatsCard from '@/components/cards/user-stats-card'
import styles from './index.module.scss'

type Props = {}

export default function StatsWrapper({ }: Props) {
  return (
    <div className={styles.container}>
      <h5>Estatísticas do Livro</h5>

      <div className={styles.wrapper}>
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
      </div>
    </div>
  )
}