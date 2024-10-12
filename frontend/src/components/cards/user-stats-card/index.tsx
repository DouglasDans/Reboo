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

export default function UserStatsCard(data: Props) {
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