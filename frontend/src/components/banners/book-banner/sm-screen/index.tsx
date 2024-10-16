'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import { useEffect, useState } from 'react'
import { convertStringDateToDate, isValidHex } from '../index.utils'
import BookStatusTag from '@/components/book-status-tag'
import DropdownCardMenu from '@/components/dropdown-menu'
import ColorPickerMenu from '@/components/dropdown-menu/menus/ColorPickerMenu'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import Link from 'next/link'
import updateBookHighlightColor from '@/actions/book/updateBookHighlightColor'

type Props = {
  book: Book
}

export default function SmallScreenBanner({ book }: Props) {
  const [highlightColor, setHighlightColor] = useState(book.highlightColor)

  async function updateHighlightColor() {
    if (highlightColor) {
      if (highlightColor !== book.highlightColor && isValidHex(highlightColor)) {
        book.highlightColor = highlightColor
        await updateBookHighlightColor(book.id, highlightColor)
      }
    }
  }

  useEffect(() => {
    updateHighlightColor()
  }, [highlightColor]);

  return (
    <section className={styles.container} >
      <div style={{ backgroundColor: highlightColor }} className={styles.bannerContent}>
        <img src={book.coverImage || "/book-image-placeholder.png"} className={styles.coverImage} alt="" />
        <div className={styles.content}>
          <div>
            <h1>{book.title}</h1>
            <span className={styles.authorName}>
              {book.authors?.length && book.authors[0]?.author?.name ? `Por ${book.authors[0].author.name}` : ""}
              {book.authors?.length && book.publicationDate && " · "}
              {book.publicationDate ? convertStringDateToDate(book.publicationDate).getFullYear() : ""}
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
        <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`}>
          <Button textColor={book.highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
        </Link>
      </div>
    </section>
  )
}