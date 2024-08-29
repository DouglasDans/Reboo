"use client"

import styles from "./search-book-and-img-section.module.scss"
import GetBookForm from "./GetBookForm"
import { useContext, useState } from "react"
import { BookURLParamsContext } from "@/context/book/BookURLParamsProvider"
import { GoogleAPIResponseBook } from "@/types/googleBooksApi"
import DropdownCard from "@/components/ui/DropdownCard/DropdownCard"
import style from "@/components/ui/cards/book-card.module.scss"
import SecondaryButton from "@/components/ui/buttons/SecondaryButton"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import IconButton from "@/components/ui/buttons/IconButton"
import verifyCoverImageURLIsValid from "@/utils/verifyCoverImageURLIsValid"
import Icon from "@/components/icons/Icon"

export default function SearchBookAndImgSection() {
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
        <div className={styles.dropdownButtonsContainer}>
          {/*<DropdownCard*/}
          {/*  buttonIcon={*/}
          {/*    <IconButton>*/}
          {/*      <Icon name="palette" />*/}
          {/*    </IconButton>*/}
          {/*  }>*/}
          {/*  <label>Adicionar Capa</label>*/}
          {/*</DropdownCard>*/}

          <DropdownCard
            buttonIcon={
              <IconButton>
                <Icon name="add_photo_alternate" />
              </IconButton>
            }>
            <label>Adicionar Capa</label>
            <form
              className={style.urlImageContainer}
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
