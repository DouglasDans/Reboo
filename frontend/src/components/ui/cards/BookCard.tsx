import styles from './book-card.module.scss'
import Icon from '@/components/ui/Icon'
import Button from '../buttons/button'

const obj = {
  title: "Harry Potter e a Câmara Secreta"
}

export default function BookCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div>
          <span>Leitura mais recente</span>
          <h4>{obj.title}</h4>
        </div>
        <div>
          <span>45% Concluído</span>
          <span>114 / 252 Páginas Lidas</span>
        </div>
        <Button startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
      </div>
      <img className={styles.imageElement} src="https://m.media-amazon.com/images/I/71NsVQ5MlwL._SL1151_.jpg" alt="" />
    </div >
  )
}