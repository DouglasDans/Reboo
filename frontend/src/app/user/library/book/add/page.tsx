import Header from "@/components/layout/Header"
import Input from "@/components/ui/forms/Input"
import { Fragment } from "react"

import styles from '@/styles/pages/book-add.module.scss'
import PrimaryButton from "@/components/ui/buttons/PrimaryButton"
import IconButton from "@/components/ui/buttons/IconButton"
import { AddPhotoAlternateRounded, PaletteRounded } from "@mui/icons-material"

type Props = {}

export default function page({ }: Props) {

  return (
    <Fragment>
      <Header titlePage="Minha Estante" />

      <section className={styles.searchBookAndImgSection}>

        <div className={styles.searchBookContainer}>

          <div className={styles.titleSearchISBN}>
            <h5>Buscar informações do livro</h5>
            <small>Busque informações do livro automaticamente informando seu ISBN </small>
          </div>

          <form action={""} method="get">
            <div className={styles.formGroup}>
              <label>ISBN</label>
              <div>
                <Input placeholder="978-90-274-3964-2" id="searchISBN" name="searchISBN" />
                <PrimaryButton>Pesquisar por informações</PrimaryButton>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.editImgContainer}>
          <div>
            <IconButton><PaletteRounded /></IconButton>
            <IconButton><AddPhotoAlternateRounded /></IconButton>
          </div>
        </div>
      </section>


    </Fragment >
  )
}