import createBook from '@/actions/book/createBook'
import styles from './index.module.scss'
import DetailsForm from './DetailsForm'
import SituationForm from './SituationForm'

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