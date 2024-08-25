import styles from './statistic-card.module.scss'

type Props = {}

export default function StatisticCard({ }: Props) {
  return (
    <div className={styles.cardContainer}>
      <span>Páginas lidas Hoje</span>
      <span className={styles.statNumber}>56</span>
      <small>Meta diária: 10</small>
    </div>
  )
}