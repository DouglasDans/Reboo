'use client'

import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import BookGridView from './grid-view'
import BookListView from './list-view'
import { Fragment, useState } from 'react'
import ListToggleButton from './list-toggle-button'

type Props = {
  title: string
  books: Book[],
  controlsDisabled?: boolean
  listNoWrap?: boolean
}

export default function CollectionBookList({
  title = "Sem Título",
  controlsDisabled = false,
  listNoWrap = false,
  books
}: Props) {
  const [listSelector, setListSelector] = useState<"list" | "grid">("grid")

  let view = (
    <Fragment>
    </Fragment>
  )

  if (!controlsDisabled) {
    view = (
      <Fragment>
        {listSelector === "grid" ? <BookGridView books={books} /> : ""}
        {listSelector === "list" ? <BookListView books={books} /> : ""}
      </Fragment>
    )
  } else {
    view = (
      <BookGridView listNoWrap={listNoWrap} books={books} />
    )
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h5>{title}</h5>
        {!controlsDisabled && (
          <div className={styles.options}>
            <h6>{`${books.length} Livros`}</h6>
            <ListToggleButton listSelector={listSelector} setListSelector={setListSelector} />
          </div>
        )}
      </header>
      {view}
    </section>
  )
}