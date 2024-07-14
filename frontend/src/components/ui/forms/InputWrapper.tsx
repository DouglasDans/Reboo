'use client'

import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider'
import styles from '@/styles/ui/forms/input-wrapper.module.scss'
import { BookDTO } from '@/types/BookDTO'
import { GoogleAPIResponseBook } from '@/types/googleBooksApi'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useContext, useEffect, useState } from 'react'

// type Props = {
//   book: any
// }

export default function InputWrapper() {
  const urlParams = useContext(BookURLParamsContext) as BookDTO

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [title, setTitle] = useState(urlParams.title || '')
  const [authors, setAuthors] = useState(urlParams.authors || '')
  const [publisher, setPublisher] = useState(urlParams.publisher || '')
  const [publishedDate, setPublishedDate] = useState(urlParams.publishedDate || '')
  const [description, setDescription] = useState(urlParams.description || '')
  const [industryIdentifiers, setIndustryIdentifiers] = useState(urlParams.industryIdentifiers || '')
  const [pageCount, setPageCount] = useState(urlParams.pageCount || '')
  const [categories, setCategories] = useState(urlParams.categories || '')
  const [language, setLanguage] = useState(urlParams.language || '')

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    setTitle(urlParams.title)
    setAuthors(urlParams.authors)
    setPublisher(urlParams.publisher)
    setPublishedDate(urlParams.publishedDate)
    setDescription(urlParams.description)
    setIndustryIdentifiers(urlParams.industryIdentifiers)
    setPageCount(urlParams.pageCount)

    params.delete('refreshForm')
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [urlParams.refreshForm]);

  function handleSetValueToURL(e: any, setState: Function, param: string) {
    const params = new URLSearchParams(searchParams)
    const value = e.target.value

    setState(value)

    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <label>Nome</label>
        <input value={title} onChange={(e) => handleSetValueToURL(e, setTitle, 'title')} placeholder="Digite o nome do livro" id="nomeBook" name="nomeBook" />
      </div>

      <div className={styles.input}>
        <label>Autor</label>
        <input value={authors} onChange={(e) => handleSetValueToURL(e, setAuthors, 'authors')} placeholder="Digite o autor do livro" id="autorNook" name="autorNook" />
      </div>

      <div className={styles.inputWrapperGrid}>
        <div className={styles.input}>
          <label>Data de Publicação</label>
          <input value={publishedDate} onChange={(e) => handleSetValueToURL(e, setPublishedDate, 'publishedDate')} type='date' placeholder="2004-06-02" id="publiDataBook" name="publiDataBook" />
        </div>

        <div className={styles.input}>
          <label>Editora</label>
          <input value={publisher} onChange={(e) => handleSetValueToURL(e, setPublisher, 'publisher')} placeholder="Editora Paralax" id="editoraBook" name="editoraBook" />
        </div>

        <div className={styles.input}>
          <label>Número de páginas</label>
          <input value={pageCount} onChange={(e) => handleSetValueToURL(e, setPageCount, 'pageCount')} placeholder="345" id="pagBook" name="pagBook" />
        </div>

        <div className={styles.input}>
          <label>ISBN</label>
          <input value={industryIdentifiers} onChange={(e) => handleSetValueToURL(e, setIndustryIdentifiers, 'industryIdentifiers')} placeholder="978-90-274-3964-2" id="isbnBook" name="isbnBook" />
        </div>
      </div>

      <div className={styles.input}>
        <label>Descrição</label>
        <textarea rows={18} className={styles.textarea} value={description} onChange={(e) => handleSetValueToURL(e, setDescription, 'description')} placeholder="978-90-274-3964-2" id="descBook" name="descBook" />
      </div>

    </div>
  )
}