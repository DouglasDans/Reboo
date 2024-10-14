
import BookEntryFormWrapper from '@/containers/library-page/book-page/edit-page/book-entry-form-wrapper'
import BookSearchAndCoverWrapper from '@/containers/library-page/book-page/edit-page/book-search-form-wrapper'
import { BookDataProvider } from '@/context/book/BookDataProvider'
import { BookURLParamsProvider } from '@/context/book/BookURLParamsProvider'
import { rebooApiService } from '@/services/rebooAPI'
import { Metadata } from 'next'
import React from 'react'

type Props = {
  searchParams: string
  params: {
    bookId: number,
    userId: number
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const book = await rebooApiService.getBookById(params.bookId)
  return {
    title: `Editando Livro - ${book.title} `,
  }
}

export default async function BookEditPage({ params, searchParams }: Props) {
  const book = await rebooApiService.getBookById(params.bookId)

  return (
    <BookURLParamsProvider value={searchParams}>
      <BookDataProvider value={book}>
        <BookSearchAndCoverWrapper />
        <BookEntryFormWrapper book={book} />
      </BookDataProvider>
    </BookURLParamsProvider>
  )
}