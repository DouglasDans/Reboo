"use client"

import PrimaryButton from "@/components/ui/buttons/PrimaryButton"
import StatusRadioButton from "@/components/ui/forms/StatusRadioButton"
import styles from "@/styles/pages/book/add/form-book-situation.module.scss"

export default function BookSituation() {
  return (
    <div className={styles.container}>
      <div className={styles.itemForm}>
        <label>Status do Livro</label>
        <div className={styles.bookStatusWrapper}>
          <StatusRadioButton
            type="BUY"
            id="status1"
            name="bookStatus"
            defaultChecked
          />
          <StatusRadioButton
            type="NOT_STARTED"
            id="status2"
            name="bookStatus"
          />
          <StatusRadioButton
            type="IN_PROGRESS"
            id="status3"
            name="bookStatus"
          />
          <StatusRadioButton type="COMPLETED" id="status4" name="bookStatus" />
          <StatusRadioButton type="GIVEN_UP" id="status5" name="bookStatus" />
        </div>
      </div>

      <div className={styles.itemForm}>
        <label>Quantidade de Páginas Lidas</label>
        <input name={"bookReadPages"} type="number" defaultValue={0} required />
      </div>

      <div className={styles.itemForm}>
        <label>Adicionar à Coleção</label>
        <input type="text" disabled />
      </div>

      <div className={styles.itemForm}>
        <label>Finalizar Cadastro</label>
        <PrimaryButton>Cadastrar Livro</PrimaryButton>
      </div>
    </div>
  )
}
