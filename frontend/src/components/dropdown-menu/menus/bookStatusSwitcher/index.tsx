

import StatusRadioButton from '@/components/forms/StatusRadioButton'
import styles from './index.module.scss'
import { Book } from '@/services/rebooAPI/api.types'
import Button from '@/components/buttons/button'
import updateBookStatus from '@/actions/book/updateBookStatus'

type Props = {
  book: Book
}

export default async function BookStatusSwitcher({ book }: Props) {

  const updateBookStatusWithId = updateBookStatus.bind(null, book.id)

  return (
    <div className={styles.container}>
      <h6>Alterar Status de Leitura</h6>
      <form action={updateBookStatusWithId} className={styles.formContainer}>
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
        <Button variant='secondary'>Atualizar status</Button>
      </form>
    </div>
  )
}