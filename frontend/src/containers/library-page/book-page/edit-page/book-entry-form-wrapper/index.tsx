import styles from './index.module.scss'
import DetailsForm from './details-form-wrapper'
import SituationForm from './situation-form-wrapper'
import { Book } from '@/services/rebooAPI/api.types'
import updateBook from '@/actions/book.action'

type Props = {
  book: Book
}

export default function BookEntryFormWrapper({ book }: Props) {
  return (
    <section >
      <form action={updateBook} className={styles.form}>
        <DetailsForm />
        <SituationForm book={book} />
      </form>
    </section>
  )
}