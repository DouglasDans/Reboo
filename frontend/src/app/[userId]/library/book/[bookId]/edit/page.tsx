import BookEntryFormWrapper from '@/components/pages/library/book/edit/BookEntryFormWrapper'
import BookSearchAndCoverWrapper from '@/components/pages/library/book/edit/BookSearchAndCoverWrapper'
import { BookDataProvider } from '@/context/book/BookDataProvider'
import { BookURLParamsProvider } from '@/context/book/BookURLParamsProvider'
import { getBookById } from '@/services/rebooAPI/api.services'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Editar Livro",
}

type Props = {
  searchParams: string
  params: {
    bookId: number,
    userId: number
  }
}

export default async function BookEditPage({ params, searchParams }: Props) {

  const book = await getBookById(params.bookId)

  return (
    <BookURLParamsProvider value={searchParams}>
      <BookDataProvider value={book}>
        <BookSearchAndCoverWrapper />
        <BookEntryFormWrapper book={book} />
      </BookDataProvider>
    </BookURLParamsProvider>
  )
}