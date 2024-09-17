import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import InfoContainer from './InfoContainer'
import ActionButtonsWrapper from './ActionButtonsWrapper'
import StatsWrapper from './StatsWrapper'
import { BookDataProvider } from '@/context/book/BookDataProvider'

type Props = {
  book: Book
}

export default function BookContentWrapper({ book }: Props) {
  return (
    <BookDataProvider value={book}>
      <div className={styles.container}>
        <div className={styles.leftWrapper}>
          <InfoContainer book={book} />
        </div>
        <div className={styles.rightWrapper}>
          <ActionButtonsWrapper book={book} />
          <StatsWrapper />
        </div>
      </div>
    </BookDataProvider>
  )
}