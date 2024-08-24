import styles from "@/styles/ui/forms/status-radio-button.module.scss"

type Props = {
  type: "BUY" | "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED" | "GIVEN_UP"
  id: string
  name: string
  defaultChecked?: boolean
}

export default function StatusRadioButton({
  type,
  id,
  name,
  defaultChecked,
}: Props) {
  const tagTypes = {
    BUY: {
      value: "Comprar",
      style: styles.comprar,
    },
    NOT_STARTED: {
      value: "Não Iniciado",
      style: styles.nIniciado,
    },
    IN_PROGRESS: {
      value: "Em Andamento",
      style: styles.andamento,
    },
    COMPLETED: {
      value: "Concluído",
      style: styles.concluido,
    },
    GIVEN_UP: {
      value: "Desistiu",
      style: styles.desistiu,
    },
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
      <label
        className={styles.labelTag + " " + tagTypes[type].style}
        htmlFor={id}>
        {tagTypes[type].value}
      </label>
    </div>
  )
}
