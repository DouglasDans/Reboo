'use client' // Error components must be Client Components

import ErrorPageContainer from '@/containers/error-page'
import { useEffect } from 'react'

export default function Error({
  error,
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