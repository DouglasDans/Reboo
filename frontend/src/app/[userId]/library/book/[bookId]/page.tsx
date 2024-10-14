
import BookBanner from '@/components/banners/book-banner'
import BookContentWrapper from '@/containers/library-page/book-page/main-page/book-content-container'
import { rebooApiService } from '@/services/rebooAPI'
import { title } from 'process'
import React, { Fragment } from 'react'

type Props = {
  params: {
    bookId: number
  }
}

export async function generateMetadata({ params }: Props) {
  const book = await rebooApiService.getBookById(params.bookId)
  return {
    title: `${book.title}`,
  }
}

export default async function BookPage({ params }: Props) {

  const book = await rebooApiService.getBookById(params.bookId)

  return (
    <Fragment>
      <BookBanner book={book} />
      <BookContentWrapper book={book} />
    </Fragment>
  )
}