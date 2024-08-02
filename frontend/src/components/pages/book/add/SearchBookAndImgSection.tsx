"use client"

import { AddPhotoAlternateRounded, PaletteRounded } from "@mui/icons-material"
import styles from "@/styles/pages/book/add/search-book-and-img-section.module.scss"
import GetBookForm from "./GetBookForm"
import { useContext, useEffect, useState } from "react"
import { BookURLParamsContext } from "@/context/book/BookURLParamsProvider"
import { GoogleAPIResponseBook } from "@/types/googleBooksApi"
import DropdownCard from "@/components/ui/DropdownCard/DropdownCard"
import style from "styles/ui/dropdown-card/dropdown-card.module.scss"
import SecondaryButton from "@/components/ui/buttons/SecondaryButton"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import verifyCoverImageURLIsValid from "@/utils/verifyCoverImageURLIsValid"

export default function SearchBookAndImgSection() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [coverImage, setCoverImage] = useState<string>(urlParams.imageLinks || "")

  async function submitConverImage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)

    const urlImage = await verifyCoverImageURLIsValid(
      e.currentTarget.coverImageInput.value,
    )

    if (typeof urlImage === "string") {
      params.set("imageLinks", urlImage)
    } else {
      params.delete("imageLinks")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <section className={styles.searchBookAndImgSection}>
      <div className={styles.searchBookContainer}>
        <div className={styles.titleSearchISBN}>
          <h5>Buscar informações do livro</h5>
          <small>
            Busque informações do livro automaticamente informando seu ISBN{" "}
          </small>
        </div>

        <GetBookForm />
      </div>

      <div className={styles.editImgContainer}>
        <div>
          <DropdownCard buttonIcon={<AddPhotoAlternateRounded />}>
            <label>Adicionar Capa</label>
            <form
              className={style.urlImageContainer}
              onSubmit={e => {
                submitConverImage(e)
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
              <SecondaryButton>Enviar</SecondaryButton>
            </form>
            {/*<p>Ou</p>*/}
            {/*<input type={"file"} />*/}
          </DropdownCard>
        </div>

        <img
          src={
            typeof urlParams.imageLinks !== "string"
              ? "/book-image-placeholder.png"
              : urlParams.imageLinks
          }
          className={styles.coverImage}
          height={"200"}
          width={"140"}
          alt="Capa do livro"
        />
      </div>
    </section>
  )
}
