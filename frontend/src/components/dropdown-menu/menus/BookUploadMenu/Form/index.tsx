'use client'

import { useContext, useState } from 'react'
import styles from './index.module.scss'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getHighlightColorFromCoverImage, isValidImageUrl } from './index.utils'
import Button from '@/components/buttons/button'
import { GoogleBookResponse } from '@/services/GoogleBooksAPI/api.types'

export default function BookUploadForm() {
  const urlParams = useContext(BookURLParamsContext) as GoogleBookResponse

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [coverImage, setCoverImage] = useState<string>(urlParams.imageLinks || "")

  async function submitCoverImage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const image = e.currentTarget.coverImageInput.value
    const params = new URLSearchParams(searchParams)
    const isValidImage = await isValidImageUrl(image)

    if (isValidImage) {
      const highlightColor = await getHighlightColorFromCoverImage(image)
      params.set("imageLinks", image)
      params.set("highlightColor", highlightColor)
    } else {
      params.delete("imageLinks")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <form
      className={styles.formContainer}
      onSubmit={e => {
        submitCoverImage(e)
      }}>
      <input
        name={"coverImageInput"}
        type={"text"}
        placeholder={"Inserir Link"}
        onChange={e => {
          setCoverImage(e.currentTarget.value)
        }}
        value={coverImage}
      />
      <Button variant='secondary'>Enviar</Button>
    </form>
  )
}