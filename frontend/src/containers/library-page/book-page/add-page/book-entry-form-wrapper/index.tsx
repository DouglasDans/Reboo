import createBook from '@/actions/book/createBook'
import styles from './index.module.scss'
import DetailsForm from './details-form-wrapper'
import SituationForm from './situation-form-wrapper'

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