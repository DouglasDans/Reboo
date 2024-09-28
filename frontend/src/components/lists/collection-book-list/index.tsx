'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import BookGridView from './grid-view'
import BookListView from './list-view'
import { useState } from 'react'
import ListToggleButton from './list-toggle-button'

type Props = {
  title: string
  books: Book[]
}

export default function CollectionBookList({
  title = "Sem Título",
  books
}: Props) {
  const [listSelector, setListSelector] = useState<"list" | "grid">("grid")

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h5>{title}</h5>
        <div className={styles.options}>
          <h6>{`${books.length} Livros`}</h6>
          <ListToggleButton listSelector={listSelector} setListSelector={setListSelector} />
        </div>
      </header>
      {listSelector === "grid" ? <BookGridView books={books} /> : ""}
      {listSelector === "list" ? <BookListView books={books} /> : ""}
    </section>
  )
}