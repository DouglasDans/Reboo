import styles from './index.module.scss'

type Props = {
  status: "BUY" | "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "GIVEN_UP"
}

const textSpan = {
  BUY: {
    title: "Comprar"
  },
  NOT_STARTED: {
    title: "Não Iniciado"
  },
  IN_PROGRESS: {
    title: "Em Andamento"
  },
  COMPLETED: {
    title: "Concluído"
  },
  GIVEN_UP: {
    title: "Desistiu"
  },
}

export default function BookStatusTag({ status }: Props) {

  return (
    <span className={`${styles.tag} ${styles[status]}`}>{textSpan[status].title}</span>
  )
}