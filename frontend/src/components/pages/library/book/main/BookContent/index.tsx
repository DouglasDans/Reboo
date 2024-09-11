import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import InfoContainer from './InfoContainer'

type Props = {
  book: Book
}

export default function BookContentWrapper({ book }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <InfoContainer book={book} />
      </div>
      <div className={styles.actions}>Actions</div>
      <div className={styles.stats}>Stats</div>
    </div>
  )
}