import styles from './book-list-item.module.scss'

type Props = {
  book: {
    title: string
    authors: string
    imgSrc: string
  }
}

export default function BookListItem({ book }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.bookCoverImage}>
        <img className={styles.coverImage} src="/book-image-placeholder.png" alt="" />
      </div>
      <div className={styles.bookCoverInfo}>
        <small className={styles.authorName}>Jk Kubsheck</small>
        <h6 className={styles.bookTitle}>Harry potter e a câmara de sonhos impossíveis</h6>
      </div>
    </div>
  )
}