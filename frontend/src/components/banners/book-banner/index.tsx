import React from 'react'
import LargeScreenBanner from './lg-screen'
import { Book } from '@/services/rebooAPI/api.types'

type Props = {
  book: Book
}

export default function BookBanner({ book }: Props) {
  return (
    <LargeScreenBanner book={book} />
  )
}