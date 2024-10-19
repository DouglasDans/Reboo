import styles from './index.module.scss'
import StatsInDevelopment from '@/components/stats-in-development'

export default function StatsWrapper() {
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