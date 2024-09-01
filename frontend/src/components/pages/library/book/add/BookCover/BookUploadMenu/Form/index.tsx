'use client'

import { useContext, useState } from 'react'
import styles from './index.module.scss'
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getHighlightColorFromCoverImage, verifyCoverImageURLIsValid } from './index.utils'
import Button from '@/components/ui/buttons/button'

export default function BookUploadForm() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [coverImage, setCoverImage] = useState<string>(urlParams.imageLinks || "")

  async function submitCoverImage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    const urlImage = await verifyCoverImageURLIsValid(
      e.currentTarget.coverImageInput.value,
    )

    if (urlImage) {
      const highlightColor = await getHighlightColorFromCoverImage(urlImage)
      params.set("imageLinks", urlImage)
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