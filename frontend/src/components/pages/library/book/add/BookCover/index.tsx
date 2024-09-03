'use client'

import DropdownCardMenu from '@/components/ui/DropdownCardMenu'
import styles from './index.module.scss'
import { useContext } from 'react'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import BookUploadMenu from './BookUploadMenu'
import BookColorPickerMenu from './BookColorPickerMenu'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook


  return (
    <div className={styles.editImgContainer}>
      <div className={styles.dropdownButtonsContainer}>
        <DropdownCardMenu buttonIcon="palette">
          <BookColorPickerMenu />
        </DropdownCardMenu>

        <DropdownCardMenu buttonIcon="add_photo_alternate">
          <BookUploadMenu />
        </DropdownCardMenu>
      </div>

      <img
        src={
          typeof urlParams.imageLinks !== "string"
            ? "/book-image-placeholder.png"
            : urlParams.imageLinks
        }
        className={styles.coverImage}
        height={"190"}
        alt="Capa do livro"
      />
    </div>
  )
}