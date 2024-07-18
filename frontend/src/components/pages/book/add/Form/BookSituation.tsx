'use client'

import BookStatusButton from "@/components/ui/buttons/BookStatusButton";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";
import styles from '@/styles/pages/book/add/form-book-situation.module.scss'
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function BookSituation() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  function setBookStatusState(e: Event, param: string) {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)
    params.set("bookStatus", param)

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemForm}>
        <label>Status do Livro</label>
        <div className={styles.bookStatusWrapper}>
          <BookStatusButton onClick={setBookStatusState} type="comprar" value={"comprar"} />
          <BookStatusButton onClick={setBookStatusState} type="naoIniciado" value={"naoIniciado"} />
          <BookStatusButton onClick={setBookStatusState} type="andamento" value={"andamento"} />
          <BookStatusButton onClick={setBookStatusState} type="concluido" value={"concluido"} />
          <BookStatusButton onClick={setBookStatusState} type="desistiu" value={"desistiu"} />
        </div>
      </div>

      <div className={styles.itemForm}>
        <label>Adicionar à Coleção</label>
        <input type="text" disabled />
      </div>

      <div className={styles.itemForm}>
        <label>Finalizar Cadastro</label>
        <PrimaryButton>
          Cadastrar Livro
        </PrimaryButton>
      </div>
    </div>
  )
}