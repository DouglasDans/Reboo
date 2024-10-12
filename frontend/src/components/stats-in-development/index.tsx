import Icon from "../icon"
import styles from './index.module.scss'

export default function StatsInDevelopment() {
  return (
    <div className={styles.placeholder}>
      <Icon name='construction' />
      <h6>Área de estatísticas ainda em desenvolvimento</h6>
      <span>Logo em breve todas suas estatísticas estarão disponíveis</span>
    </div>
  )
}