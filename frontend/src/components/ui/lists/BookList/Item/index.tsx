import styles from './index.module.scss'

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
  coverImage: "/book-image-placeholder.png"
}

export default function BookListItem({ book = placeholderBook }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.bookCoverImage}>
        <img className={styles.coverImage} src={book.coverImage ? book.coverImage : "/book-image-placeholder.png"} alt="" />
      </div>
      <div className={styles.bookCoverInfo}>
        <small className={styles.authorName}>{book.authors} Ace da Rocha</small>
        <h6 className={styles.bookTitle}>{book.title}</h6>
      </div>
    </div>
  )
}