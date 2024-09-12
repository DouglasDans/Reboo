import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import InfoContainer from './InfoContainer'
import ActionButtonsWrapper from './ActionButtonsWrapper'
import StatsWrapper from './StatsWrapper'

type Props = {
  book: Book
}

export default function BookContentWrapper({ book }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <InfoContainer book={book} />
      </div>
      <div className={styles.rightWrapper}>
        <ActionButtonsWrapper book={book} />
        <StatsWrapper />
      </div>
    </div>
  )
}