'use client'

import IconButton from "@/components/ui/buttons/IconButton"
import { AddPhotoAlternateRounded, PaletteRounded } from "@mui/icons-material"
import styles from '@/styles/pages/book/add/search-book-and-img-section.module.scss'
import GetBookForm from "./GetBookForm"
import { useContext } from "react"
import { BookURLParamsContext } from "@/context/book/BookURLParamsProvider"
import { GoogleAPIResponseBook } from "@/types/googleBooksApi"


export default function SearchBookAndImgSection() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook

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
          src={typeof (urlParams.imageLinks) !== "string" ? "/book-image-placeholder.png" : urlParams.imageLinks}
          className={styles.coverImage}
          height={'200'}
          width={'140'}
          alt="Capa do livro"
        />

      </div>
    </section>)
}