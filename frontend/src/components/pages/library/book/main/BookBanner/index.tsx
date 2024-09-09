import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import Button from '@/components/ui/buttons/button'
import Icon from '@/components/ui/Icon'

type Props = {
  book: Book
}

export default function BookBanner({ book }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundBanner} style={{ backgroundColor: book.highlightColor }}>
        <img src={book.coverImage} className={styles.coverImage} alt="" />

        <div className={styles.bannerButtons}>
          <Button startDecorator={<Icon name='palette' />} textColor={book.highlightColor} />
          <Button startDecorator={<Icon name="timer_play" />} textColor={book.highlightColor}>Nova Sessão</Button>
        </div>
      </div>
    </div>
  )
}