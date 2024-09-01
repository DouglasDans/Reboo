'use client'

import DropdownCardMenu from '@/components/ui/DropdownCardMenu'
import styles from './index.module.scss'
import { useContext } from 'react'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import BookUploadMenu from './BookUploadMenu'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook


  return (
    <div className={styles.editImgContainer}>
      <div className={styles.dropdownButtonsContainer}>
        {/* <DropdownMenuCard buttonIcon="palette">
          <BookUploadCard />
        </DropdownMenuCard> */}

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