'use client'

import Link from 'next/link'
import styles from './index.module.scss'
import { Book } from '@/services/rebooAPI/api.types'
import { useEffect, useState } from 'react'

type Props = {
  book: Book
}

export function isValidImageUrl(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

export default function GridBookItem({ book }: Props) {
  const [coverImage, setCoverImage] = useState<string | null>(null)

  useEffect(() => {
    setCoverImage(null)
    isValidImageUrl(book.coverImage).then((res) => {
      if (res) {
        setCoverImage(book.coverImage)
      }
    })
  }, [book.coverImage])

  return (
    <Link href={`./library/book/${book.id}`} className={styles.content}>
      <div className={styles.bookCoverImage}>
        <img
          src={coverImage || "/book-image-placeholder.png"}
          className={styles.coverImage}
          alt=""
        />
      </div>
      <div className={styles.bookCoverInfo}>
        <small className={styles.authorName}>{book.authors?.length ? book.authors[0].author?.name : ""}</small>
        <h6 className={styles.bookTitle}>{book.title}</h6>
      </div>
    </Link>
  )
}