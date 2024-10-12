import UserStatsCard from '@/components/cards/user-stats-card'
import styles from './index.module.scss'
import Icon from '@/components/icon'
import StatsInDevelopment from '@/components/stats-in-development'

export default function StatsCardsWrapper() {
  return (
    <div className={styles.wrapperContainer}>
      <StatsInDevelopment />

      {/* <UserStatsCard
        title='Páginas Lidas Hoje'
        mainNumber={56}
        mainSubtitle='Páginas'
        cardIcon='book'
        goals={{
          type: "Meta Diária: ",
          value: 50
        }}
      /> */}
      {/* <UserStatsCard />
      <UserStatsCard />
      <UserStatsCard /> */}
    </div>
  )
}