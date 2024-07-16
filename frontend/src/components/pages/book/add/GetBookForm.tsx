/* eslint-disable prettier/prettier */
"use client"

import PrimaryButton from "@/components/ui/buttons/PrimaryButton"
import googleBooksApi from "@/services/GoogleBooksAPI/api"
import styles from "@/styles/pages/book/add/get-book-form.module.scss"
import { APIResponse, GoogleAPIResponseBook } from "@/types/googleBooksApi"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import toStringISBN from "../../../../utils/isbnHandler"

export default function GetBookForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function getBookByISBN(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const isbnNumber = event.currentTarget.searchISBN.value
    const rawIsbnNumber = isbnNumber.replace(/-/gi, "")
    const params = new URLSearchParams(searchParams)

    const apiResponse = (await googleBooksApi.get(
      "/volumes?q=isbn:" + rawIsbnNumber,
    )) as APIResponse

    if (apiResponse.totalItems === 0) {
      return alert(
        "ISBN não encontrado - Verifique se ele foi digitado corretamente",
      )
    }

    //@ts-ignore
    const bookInfo = (await googleBooksApi
      .get(apiResponse.items[0].selfLink)
      .then(res => {
        return res.volumeInfo
      })) as GoogleAPIResponseBook

    console.log(bookInfo)

    bookInfo.authors ? params.set("title", bookInfo.title) : ""
    bookInfo.authors ? params.set("authors", bookInfo.authors.join(", ")) : ""
    bookInfo.publisher ? params.set("publisher", bookInfo.publisher) : ""
    bookInfo.publishedDate
      ? params.set("publishedDate", bookInfo.publishedDate)
      : ""
    bookInfo.pageCount
      ? params.set("pageCount", bookInfo.pageCount.toString())
      : ""
    bookInfo.industryIdentifiers
      ? params.set(
        "industryIdentifiers",
        typeof bookInfo.industryIdentifiers !== "string"
          ? toStringISBN(bookInfo.industryIdentifiers)
          : bookInfo.industryIdentifiers,
      )
      : ""
    bookInfo.description ? params.set("description", bookInfo.description) : ""
    bookInfo.categories
      ? params.set("categories", bookInfo.categories.join(", "))
      : ""
    bookInfo.language ? params.set("language", bookInfo.language) : ""
    params.set("refreshForm", "true")

    if (bookInfo.imageLinks) {
      params.set("imageLinks", bookInfo.imageLinks.medium)
    } else {
      params.delete("imageLinks")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <form onSubmit={getBookByISBN} method="get">
      <div className={styles.formGroup}>
        <label>ISBN</label>
        <div>
          <input
            placeholder="978-90-274-3964-2"
            id="searchISBN"
            name="searchISBN"
          />
          <PrimaryButton>Pesquisar por informações</PrimaryButton>
        </div>
      </div>
    </form>
  )
}
