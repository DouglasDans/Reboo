'use client' // Error components must be Client Components

import ErrorPageContainer from '@/containers/404-page'
import { useEffect } from 'react'
import error from './not-found';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <ErrorPageContainer message={error.message} />
  )
}