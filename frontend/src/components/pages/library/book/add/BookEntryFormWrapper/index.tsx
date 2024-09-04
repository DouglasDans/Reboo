import postBook from '@/actions/book/postBook'
import styles from './index.module.scss'
import DetailsForm from './DetailsForm'

export default function BookEntryFormWrapper() {
  return (
    <section >
      <form action={postBook} className={styles.form}>
        <DetailsForm />
      </form>
    </section>
  )
}