import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import InfoContainer from './InfoContainer'
import ActionButtonsWrapper from './ActionButtonsWrapper'

type Props = {
  book: Book
}

export default function BookContentWrapper({ book }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <InfoContainer book={book} />
      </div>
      <div className={styles.actions}>
        <ActionButtonsWrapper book={book} />
      </div>
      <div className={styles.stats}>Stats</div>
    </div>
  )
}