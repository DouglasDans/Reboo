import React from 'react'
import styles from './book-status-button.module.scss'

type Props = {
  type: "comprar" | "naoIniciado" | "andamento" | "concluido" | "desistiu",
  onClick: Function,
  value: string
}

export default function BookStatusButton({ type, onClick, value }: Props) {

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
    <button onClick={(e) => { onClick(e, value) }} className={styles.button + " " + tagTypes[type].style}>
      {tagTypes[type].value}
    </button>
  )
}