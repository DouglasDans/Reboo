'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import Button from '@/components/ui/buttons/button'
import Icon from '@/components/ui/Icon'
import { useEffect, useRef, useState } from 'react'
import { convertStringDateToDate } from './index.utils'
import BookStatusTag from '@/components/ui/BookStatusTag'
import DropdownCardMenu from '@/components/ui/DropdownCardMenu'
import BannerColorPickerMenu from './ColorPickerMenu'

type Props = {
  book: Book
}

export default function BookBanner({ book }: Props) {

  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      setWidth(imgRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.backgroundBanner} style={{ backgroundColor: book.highlightColor }}>
        <img ref={imgRef} src={book.coverImage} className={styles.coverImage} alt="" style={{ opacity: (width ? 1 : 0) }} />

        <div className={styles.bannerButtons}>
          <DropdownCardMenu buttonIcon={"palette"} variantButton='primary'>
            <BannerColorPickerMenu />
          </DropdownCardMenu>
          <Button startDecorator={<Icon name="timer_play" />} textColor={book.highlightColor}>Nova Sessão</Button>
        </div>
      </div>

      <div style={{ marginLeft: (width ? width + 25 : 0) }} className={styles.titleContainer}>
        <div className={styles.title}>
          <h1>{book.title}</h1>
          <span className={styles.authorName}>Por {book.authors[0].author.name} · {convertStringDateToDate(book.publicationDate).getFullYear()}</span>
        </div>

        <div className={styles.BookStatus}>
          <BookStatusTag status={book.status} />
        </div>
      </div>
    </div>
  )
}