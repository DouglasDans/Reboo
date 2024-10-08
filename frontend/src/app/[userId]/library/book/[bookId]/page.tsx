import BookBanner from '@/components/pages/library/book/main/BookBanner'
import BookContentWrapper from '@/components/pages/library/book/main/BookContent'
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