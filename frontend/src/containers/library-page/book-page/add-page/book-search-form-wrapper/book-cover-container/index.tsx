'use client'

import styles from './index.module.scss'
import { useContext } from 'react'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import DropdownCardMenu from '@/components/dropdown-menu'
import BookColorPickerMenu from '@/components/dropdown-menu/menus/BookColorPickerMenu'
import BookUploadMenu from '@/components/dropdown-menu/menus/BookUploadMenu'
import { GoogleBookResponse } from '@/services/GoogleBooksAPI/api.types'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as GoogleBookResponse
  return (
    <div className={styles.editImgContainer}>
      <div className={styles.dropdownButtonsContainer}>
        <DropdownCardMenu content={<BookColorPickerMenu />}>
          <Button variant='secondary' startDecorator={<Icon name='palette' />} />
        </DropdownCardMenu>

        <DropdownCardMenu content={<BookUploadMenu />}>
          <Button variant='secondary' startDecorator={<Icon name='add_photo_alternate' />} />
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