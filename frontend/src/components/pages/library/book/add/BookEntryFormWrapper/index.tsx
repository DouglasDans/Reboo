import postBook from '@/actions/book/postBook'
import styles from './index.module.scss'
import DetailsForm from './DetailsForm'
import SituationForm from './SituationForm'

export default function BookEntryFormWrapper() {
  return (
    <section >
      <form action={postBook} className={styles.form}>
        <DetailsForm />
        <SituationForm />
      </form>
    </section>
  )
}