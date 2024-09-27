import styles from './index.module.scss'
import Icon from '@/components/icon'

type Props = {
  title: string
  mainNumber: number
  mainSubtitle: string
  cardIcon: string
  goals: {
    type: string
    value: number
  }
  trends?: {
    trendUp: boolean
    trendValue: number
    trendIcon: string
  }
}

const obj = {
  title: "Páginas Lidas Hoje",
  mainNumber: 56,
  mainSubtitle: "Páginas",
  cardIcon: "book",
  goals: {
    type: "Meta diária:",
    value: 10,
  },
  trends: {
    trendUp: true,
    trendValue: 189,
    trendIcon: "trending_up"
  }
}

export default function UserStatsCard(data: Props) {
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
              <div className={styles.goalIcon + " " + (data.trends.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}>
                <Icon name={data.trends.trendIcon} />
              </div>
              <small className={styles.goalText + " " + (data.trends.trendUp ? styles.goalTrendUp : styles.goalTrendDown)}>{data.trends.trendValue}%</small>
            </div>
            : ""}
          <small>{data.goals.type} {data.goals.value}</small>
        </div>

      </div>
      <div className={styles.icon}><Icon name={data.cardIcon} /></div>
    </div>
  )
}