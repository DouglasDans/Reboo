import BookCoverContainer from './BookCover'
import styles from './search-book-and-cover-img.module.scss'
import SearchBookContainer from './SearchBook/container'

export default function SearchBookAndCoverImageWrapper() {
  return (
    <section className={styles.wrapperContainer}>
      <SearchBookContainer />
      <BookCoverContainer />
    </ section>
  )
}