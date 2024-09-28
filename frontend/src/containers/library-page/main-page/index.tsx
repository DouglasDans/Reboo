import React, { Fragment } from 'react'
import BookStatsAndButtons from './book-stats-buttons-wrapper'
import { rebooApiService } from '@/services/rebooAPI'
import CollectionBookList from '@/components/lists/collection-book-list'

type Props = {
  params: {
    userId: number
  }
}

export default async function LibraryPage({ params }: Props) {
  const books = await rebooApiService.getAllBooksAndAuthors(params.userId)
  return (
    <Fragment>
      <BookStatsAndButtons params={params} />
      <CollectionBookList title='Todos os livros' books={books} />
    </Fragment>
  )
}