'use client'

import DropdownCardMenu from '@/components/ui/DropdownCardMenu'
import styles from './index.module.scss'
import { useContext, useEffect, useState } from 'react'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import BookUploadMenu from './BookUploadMenu'
import BookColorPickerMenu from './BookColorPickerMenu'
import { BookDataContext } from '@/context/book/BookDataProvider'
import { Book } from '@/services/rebooAPI/api.types'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook
  const bookData = useContext(BookDataContext) as Book

  const [coverImage, setCoverImage] = useState<string>(bookData.coverImage)

  useEffect(() => {
    if (typeof urlParams.imageLinks === "string") {
      setCoverImage(urlParams.imageLinks)
    } else {
      setCoverImage(bookData.coverImage)
    }
  }, [urlParams, bookData]);

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
          coverImage ? coverImage : "/book-image-placeholder.png"
        }
        className={styles.coverImage}
        height={"190"}
        alt="Capa do livro"
      />
    </div>
  )
}