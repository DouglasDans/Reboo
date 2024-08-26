import { Book } from '@mui/icons-material'
import styles from './statistic-card.module.scss'

type Props = {}

export default function StatisticCard({ }: Props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.content}>
        <span className={styles.cardTitle}>Páginas lidas Hoje</span>
        <span className={styles.statNumber}>56</span>
        <small>Meta diária: 10</small>
      </div>
      <div className={styles.icon}><Book /></div>
    </div>
  )
}