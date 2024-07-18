'use client'

import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import StatusRadioButton from "@/components/ui/forms/StatusRadioButton";
import styles from '@/styles/pages/book/add/form-book-situation.module.scss'

export default function BookSituation() {
  return (
    <div className={styles.container}>
      <div className={styles.itemForm}>
        <label>Status do Livro</label>
        <div className={styles.bookStatusWrapper}>
          <StatusRadioButton type="comprar" id="status1" name="bookStatus" defaultChecked />
          <StatusRadioButton type="naoIniciado" id="status2" name="bookStatus" />
          <StatusRadioButton type="andamento" id="status3" name="bookStatus" />
          <StatusRadioButton type="concluido" id="status4" name="bookStatus" />
          <StatusRadioButton type="desistiu" id="status5" name="bookStatus" />
        </div>
      </div>

      <div className={styles.itemForm}>
        <label>Adicionar à Coleção</label>
        <input type="text" disabled />
      </div>

      <div className={styles.itemForm}>
        <label>Finalizar Cadastro</label>
        <PrimaryButton>
          Cadastrar Livro
        </PrimaryButton>
      </div>
    </div>
  )
}