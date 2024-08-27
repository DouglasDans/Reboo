import styles from './book-card.module.scss'
import PrimaryButton from '../buttons/PrimaryButton'
import { TimerRounded } from '@mui/icons-material'

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
        <PrimaryButton startDecorator={<TimerRounded />}>Nova Sessão</PrimaryButton>
      </div>
      <img className={styles.imageElement} src="https://m.media-amazon.com/images/I/71NsVQ5MlwL._SL1151_.jpg" alt="" />
    </div >
  )
}