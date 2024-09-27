
import BookBanner from '@/containers/library-page/book-page/main-page/book-banner-container'
import BookContentWrapper from '@/containers/library-page/book-page/main-page/book-content-container'
import { rebooApiService } from '@/services/rebooAPI'
import React, { Fragment } from 'react'

type Props = {
  params: {
    bookId: number
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