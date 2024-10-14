'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { useEffect, useRef, useState } from 'react'
import { convertStringDateToDate } from './index.utils'

import updateBookHighlightColor from '@/actions/book/updateBookHighlightColor'
import DropdownCardMenu from '@/components/dropdown-menu'
import ColorPickerMenu from '@/components/dropdown-menu/menus/ColorPickerMenu'
import BookStatusTag from '@/components/book-status-tag'
import Link from 'next/link'

type Props = {
  book: Book
}

function isValidHex(hex: string): boolean {
  const hexRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexRegex.test(hex);
}

export default function LargeScreenBanner({ book }: Props) {

  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [highlightColor, setHighlightColor] = useState(book.highlightColor)

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (highlightColor !== book.highlightColor && isValidHex(highlightColor)) {
        await updateBookHighlightColor(book.id, highlightColor)
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [highlightColor]);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBanner} style={{ backgroundColor: highlightColor }}>
        <img ref={imgRef} src={book.coverImage} className={styles.coverImage} alt="" style={{ opacity: (width ? 1 : 0) }} />

        <div className={styles.bannerButtons}>
          <DropdownCardMenu content={<ColorPickerMenu highlightColorState={{ highlightColor, setHighlightColor }} />}>
            <Button startDecorator={<Icon name='palette' />} textColor={highlightColor} />
          </DropdownCardMenu>
          <Link href={`/${book.userId}/stats/session/add?bookId=${book.id}`}>
            <Button textColor={book.highlightColor} startDecorator={<Icon name='timer_play' />}>Nova Sessão</Button>
          </Link>
        </div>
      </div>

      <div style={{ marginLeft: (width ? width + 25 : 0) }} className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>{book.title}</h1>
          <span className={styles.authorName}>
            {book.authors?.length ? `Por ${book.authors[0].author.name} · ` : ""}{convertStringDateToDate(book.publicationDate).getFullYear()}</span>
        </div>

        <div className={styles.BookStatus}>
          <BookStatusTag status={book.status} />
        </div>
      </div>
    </div>
  )
}