import styles from '@/styles/ui/forms/status-radio-button.module.scss'

type Props = {
  type: "comprar" | "naoIniciado" | "andamento" | "concluido" | "desistiu",
  id: string
  name: string
  defaultChecked?: boolean
}

export default function StatusRadioButton({ type, id, name, defaultChecked }: Props) {

  const tagTypes = {
    comprar: {
      value: "Comprar",
      style: styles.comprar
    },
    naoIniciado: {
      value: "Não Iniciado",
      style: styles.nIniciado
    },
    andamento: {
      value: "Em Andamento",
      style: styles.andamento
    },
    concluido: {
      value: "Concluído",
      style: styles.concluido
    },
    desistiu: {
      value: "Desistiu",
      style: styles.desistiu
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        id={id}
        value={type}
        defaultChecked={defaultChecked}
      />
      <label className={styles.labelTag + " " + tagTypes[type].style} htmlFor={id}>{tagTypes[type].value}</label>
    </div>
  )
}