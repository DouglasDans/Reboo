import styles from './index.module.scss'
import DetailsForm from './details-form-wrapper'
import SituationForm from './situation-form-wrapper'
import { createBook } from '@/actions/book.action'

export default function BookEntryFormWrapper() {
  return (
    <section >
      <form action={createBook} className={styles.form}>
        <DetailsForm />
        <SituationForm />
      </form>
    </section>
  )
}