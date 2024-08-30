import styles from './book-list-item.module.scss'

type Props = {
  book: {
    title: string
    authors: string
    imgSrc: string
  }
}

const placeholderBook = {
  title: "Sem Título",
  authors: "Autor indefinido",
  imgSrc: "/book-image-placeholder.png"
}

export default function BookListItem({ book = placeholderBook }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.bookCoverImage}>
        <img className={styles.coverImage} src={book.imgSrc} alt="" />
      </div>
      <div className={styles.bookCoverInfo}>
        <small className={styles.authorName}>{book.authors}</small>
        <h6 className={styles.bookTitle}>{book.title}</h6>
      </div>
    </div>
  )
}