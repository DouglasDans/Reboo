'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import { useState } from 'react'
import { convertStringDateToDate } from './index.utils'
import BookStatusTag from '@/components/book-status-tag'
import DropdownCardMenu from '@/components/dropdown-menu'
import ColorPickerMenu from '@/components/dropdown-menu/menus/ColorPickerMenu'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'

type Props = {
  book: Book
}

export default function SmallScreenBanner({ book }: Props) {
  const [highlightColor, setHighlightColor] = useState(book.highlightColor)

  return (
    <section className={styles.container} >
      <div style={{ backgroundColor: highlightColor }} className={styles.bannerContent}>
        <img src={book.coverImage} className={styles.coverImage} alt="" />
        <div className={styles.content}>
          <div>
            <h1>{book.title}</h1>
            <span className={styles.authorName}>
              {book.authors ? `Por ${book.authors[0].author.name} · ` : ""}{convertStringDateToDate(book.publicationDate).getFullYear()}
            </span>
          </div>
          <BookStatusTag status={book.status} />
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <DropdownCardMenu
          content={<ColorPickerMenu highlightColorState={{ highlightColor, setHighlightColor }} />}>
          <Button startDecorator={<Icon name='palette' />} textColor={highlightColor} />
        </DropdownCardMenu>
        <Button startDecorator={<Icon name="timer_play" />} textColor={highlightColor}>
          Nova Sessão
        </Button>
      </div>
    </section>
  )
}