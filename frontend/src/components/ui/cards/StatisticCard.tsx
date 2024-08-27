import { Book, TrendingUpRounded } from '@mui/icons-material'
import styles from './statistic-card.module.scss'
import { ReactNode } from 'react'

type Props = {
  title: string
  mainNumber: number
  mainSubtitle: string
  cardIcon: ReactNode
  goals: {
    type: string
    value: number
  }
  trends?: {
    trendUp: boolean
    trendValue: number
  }
}

const obj = {
  title: "Páginas Lidas Hoje",
  mainNumber: 56,
  mainSubtitle: "Páginas",
  cardIcon: <Book />,
  goals: {
    type: "Meta diária:",
    value: 10,
  },
  trends: {
    trendUp: true,
    trendValue: 189
  }
}

export default function StatisticCard(data: Props) {
  data = obj
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <span className={styles.cardTitle}>{data.title}</span>

        <div className={styles.statNumber}>
          <span className={styles.mainNumber}>{data.mainNumber}</span>
          <span className={styles.mainSubtitle}> {data.mainSubtitle}</span>
        </div>

        <div className={styles.goals}>
          {data.trends ?
            <div>
              <div
                className={styles.goalIcon + " " +
                  (data.trends.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}
              >
                <TrendingUpRounded />
              </div>
              <small className={styles.goalText + " " + (data.trends.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}>{data.trends.trendValue}%</small>
            </div>
            : ""}
          <small>{data.goals.type} {data.goals.value}</small>
        </div>

      </div>
      <div className={styles.icon}>{data.cardIcon}</div>
    </div>
  )
}