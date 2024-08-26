import { Book } from '@mui/icons-material'
import styles from './statistic-card.module.scss'

type Props = {}

const data = {
  title: "Páginas Lidas Hoje",
  mainNumber: 56,
  mainSubtitle: "Páginas",
  goals: {
    type: "diárias",
    value: 10
  },
  trendingGoals: 89
}

export default function StatisticCard({ }: Props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <span className={styles.cardTitle}>{data.title}</span>
        <div className={styles.statNumber}>
          <span className={styles.mainNumber}>{data.mainNumber}</span>
          <span className={styles.mainSubtitle}> {data.mainSubtitle}</span>
        </div>
        <div className={styles.goals}>
          <small>Meta diária: 10</small>
        </div>
      </div>
      <div className={styles.icon}><Book /></div>
    </div>
  )
}