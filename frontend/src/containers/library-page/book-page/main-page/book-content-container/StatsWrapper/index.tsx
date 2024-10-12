import UserStatsCard from '@/components/cards/user-stats-card'
import styles from './index.module.scss'
import StatsInDevelopment from '@/components/stats-in-development'

type Props = {}

export default function StatsWrapper({ }: Props) {
  return (
    <div className={styles.container}>
      <h5>Estatísticas do Livro</h5>

      <div className={styles.wrapper}>
        <StatsInDevelopment />
        {/* <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard />
        <UserStatsCard /> */}
      </div>
    </div>
  )
}