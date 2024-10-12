import Icon from '@/components/icon'
import styles from './index.module.scss'

export default function BookListPlaceholder() {
  return (
    <div className={styles.container}>
      <div>
        <Icon name='book_2' />
        <h6>Ainda não há livros...</h6>
        <span>Encontre algo que desperte sua curiosidade e adicione novos livros!</span>
      </div>
    </div>
  )
}