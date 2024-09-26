import StatusRadioButton from '@/components/ui/forms/StatusRadioButton'
import styles from './index.module.scss'
import Button from '@/components/ui/buttons/button'
import { Book } from '@/services/rebooAPI/api.types'

type Props = {
  book: Book
}

export default async function SituationForm({ book }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.itemForm}>

        <label>Status do Livro</label>
        <div className={styles.bookStatusWrapper}>
          <StatusRadioButton
            type="BUY"
            id="status1"
            name="bookStatus"
            defaultChecked={book?.status === "BUY"}
          />
          <StatusRadioButton
            type="NOT_STARTED"
            id="status2"
            name="bookStatus"
            defaultChecked={book?.status === "NOT_STARTED"}
          />
          <StatusRadioButton
            type="IN_PROGRESS"
            id="status3"
            name="bookStatus"
            defaultChecked={book?.status === "IN_PROGRESS"}
          />
          <StatusRadioButton type="COMPLETED" id="status4" name="bookStatus" defaultChecked={book?.status === "COMPLETED"}
          />
          <StatusRadioButton type="GIVEN_UP" id="status5" name="bookStatus" defaultChecked={book?.status === "GIVEN_UP"}
          />
        </div>

      </div>

      <div className={styles.itemForm}>
        <label>Quantidade de Páginas Lidas</label>
        <input name={"bookReadPages"} type="number" defaultValue={book?.pagesRead} required />
      </div>

      {/* <div className={styles.itemForm}>
        <label>Adicionar à Coleção</label>
        <input type="text" disabled />
      </div> */}

      <div className={styles.itemForm}>
        <label>Finalizar Atualização do Livro</label>
        <Button>Atualizar Dados</Button>
      </div>
    </div>
  )
}