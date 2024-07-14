import IconButton from "@/components/ui/buttons/IconButton"
import { AddPhotoAlternateRounded, PaletteRounded } from "@mui/icons-material"

import styles from '@/styles/pages/book/add/search-book-and-img-section.module.scss'
import GetBookForm from "./GetBookForm"


export default function SearchBookAndImgSection() {
  return (
    <section className={styles.searchBookAndImgSection}>

      <div className={styles.searchBookContainer}>

        <div className={styles.titleSearchISBN}>
          <h5>Buscar informações do livro</h5>
          <small>Busque informações do livro automaticamente informando seu ISBN </small>
        </div>

        <GetBookForm />
      </div>

      <div className={styles.editImgContainer}>
        <div>
          <IconButton><PaletteRounded /></IconButton>
          <IconButton><AddPhotoAlternateRounded /></IconButton>
        </div>

        <img
          // src={bookCover !== null ? bookCover : "/book-image-placeholder.png"}
          className={styles.coverImage}
          height={'200'}
          width={'140'}
          alt="Capa do livro"
        />

      </div>
    </section>)
}