import styles from './index.module.scss'
import DetailsForm from './DetailsForm'
import SituationForm from './SituationForm'
import { Book } from '@/services/rebooAPI/api.types'
import updateBook from '@/actions/book/updateBook'

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