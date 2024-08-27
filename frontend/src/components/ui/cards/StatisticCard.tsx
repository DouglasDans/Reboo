import { Book, TrendingUpRounded } from '@mui/icons-material'
import styles from './statistic-card.module.scss'

type Props = {}

const data = {
  title: "Páginas Lidas Hoje",
  mainNumber: 56,
  mainSubtitle: "Páginas",
  cardIcon: <Book />,
  goals: {
    type: "Meta diária:",
    value: 10,
    trendUp: true,
    trendValue: 189
  },
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
          <div>
            <div
              className=
              {styles.goalIcon + " " +
                (data.goals.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}
            >
              <TrendingUpRounded />
            </div>
            <small className={styles.goalText + " " + (data.goals.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}>{data.goals.trendValue}%</small>
          </div>
          <small>{data.goals.type} {data.goals.value}</small>
        </div>
      </div>
      <div className={styles.icon}>{data.cardIcon}</div>
    </div>
  )
}