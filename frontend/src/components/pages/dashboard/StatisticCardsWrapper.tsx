import StatisticCard from '@/components/ui/cards/StatisticCard'
import styles from './statistic-cards-wrapper.module.scss'


type Props = {}

export default function StatisticCardsWrapper({ }: Props) {
  return (
    <div className={styles.wrapperContainer}>
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
      <StatisticCard />
    </div>
  )
}