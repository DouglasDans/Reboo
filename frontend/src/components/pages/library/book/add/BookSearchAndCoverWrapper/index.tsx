import BookCoverContainer from './BookCover'
import styles from './index.module.scss'
import SearchBookContainer from './SearchBook'

export default function BookSearchAndCoverWrapper() {
  return (
    <section className={styles.wrapperContainer}>
      <SearchBookContainer />
      <BookCoverContainer />
    </ section>
  )
}