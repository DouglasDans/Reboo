'use client'

import DropdownCardMenu from '@/components/ui/DropdownCardMenu'
import styles from './index.module.scss'
import { useContext } from 'react'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import BookColorPickerMenu from '../../../../../../ui/DropdownCardMenu/menus/BookColorPickerMenu'
import Button from '@/components/ui/buttons/button'
import Icon from '@/components/ui/icon'
import BookUploadMenu from '@/components/ui/DropdownCardMenu/menus/BookUploadMenu'
import ColorPickerMenu from '@/components/ui/DropdownCardMenu/menus/ColorPickerMenu'

export default function BookCoverContainer() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook


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