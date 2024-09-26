'use client'

import { useContext, useEffect, useState } from 'react';
import { BookData } from './index.types';
import { BookURLParamsContext } from '@/context/book/BookURLParamsProvider';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './index.module.scss';
import { UserIdContext } from '@/context/user/UserIdProvider';
import { BookDataContext } from '@/context/book/BookDataProvider';
import { Book } from '@/services/rebooAPI/api.types';
import { fetchDbBookDataToUrlParams } from './index.utils';

export default function DetailsForm() {
  const urlParams = useContext(BookURLParamsContext) as BookData;
  const userId = useContext(UserIdContext) as number;
  const dbBookData = useContext(BookDataContext) as Book;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [bookData, setBookData] = useState<BookData>(urlParams);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    fetchDbBookDataToUrlParams(dbBookData, params);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const params = new URLSearchParams(searchParams);
      fetchDbBookDataToUrlParams(dbBookData, params);
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    }
    setBookData(urlParams)
  }, [urlParams, urlParams.refreshForm]);

  function handleSetValueToURL(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    param: string
  ) {
    const params = new URLSearchParams(searchParams);
    const value = e.currentTarget.value;

    setBookData(prevState => ({
      ...prevState,
      [param]: value
    }));

    if (value) {
      params.set(param, value);
    } else {
      params.delete(param);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className={styles.container}>
      <h5>Informações do Livro</h5>

      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <label>Nome</label>
          <input
            value={bookData.title}
            onChange={e => handleSetValueToURL(e, "title")}
            placeholder="Ex: Harry Potter e a Câmara Filosofal"
            id="bookName"
            name="bookName"
            required
          />
        </div>

        <div className={styles.input}>
          <label>Autor</label>
          <input
            value={bookData.authors}
            onChange={e => handleSetValueToURL(e, "authors")}
            placeholder="Ex: Hanna Barbera"
            id="bookAuthors"
            name="bookAuthors"
            required
          />
        </div>

        <div className={styles.subInputWrapper}>

          <div className={styles.input}>
            <label>Data de Publicação</label>
            <input
              value={bookData.publishedDate}
              onChange={e => handleSetValueToURL(e, "publishedDate")}
              type="date"
              placeholder="2004-06-02"
              id="bookPublicationDate"
              name="bookPublicationDate"
              required
            />
          </div>

          <div className={styles.input}>
            <label>Editora</label>
            <input
              value={bookData.publisher}
              onChange={e => handleSetValueToURL(e, "publisher")}
              placeholder="Ex: Editora Paralax"
              id="bookPublisher"
              name="bookPublisher"
              required
            />
          </div>

          <div className={styles.input}>
            <label>Número de páginas</label>
            <input
              value={bookData.pageCount}
              onChange={e => handleSetValueToURL(e, "pageCount")}
              placeholder="Ex: 345"
              type="number"
              id="bookTotalPages"
              name="bookTotalPages"
              required
            />
          </div>

          <div className={styles.input}>
            <label>ISBN</label>
            <input
              value={bookData.industryIdentifiers}
              onChange={e =>
                handleSetValueToURL(e, "industryIdentifiers")
              }
              placeholder="Ex: 978-90-274-3964-2"
              id="bookISBN"
              name="bookISBN"
              required
            />
          </div>

          <div className={styles.input}>
            <label>Categorias</label>
            <input
              value={bookData.categories}
              onChange={e => handleSetValueToURL(e, "categories")}
              placeholder="Ex: Fantasia, Romance"
              id="bookCategories"
              name="bookCategories"
              required
            />
          </div>

          <div className={styles.input}>
            <label>Idioma</label>
            <input
              value={bookData.language}
              onChange={e => handleSetValueToURL(e, "language")}
              placeholder="Ex: Português"
              id="bookLanguage"
              name="bookLanguage"
              required
            />
          </div>

        </div>

        <div className={styles.input}>
          <label>Descrição</label>
          <textarea
            maxLength={512}
            rows={18}
            value={bookData.description}
            onChange={e => handleSetValueToURL(e, "description")}
            placeholder="Ex: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus elit, semper nec ligula ac, pretium tempus nunc. Donec sodales libero vel interdum aliquam. Duis interdum nibh et porttitor pulvinar. Donec arcu felis, ultricies ac aliquet sed, scelerisque sed dolor. Aliquam tempus nunc eu turpis venenatis, quis luctus felis consequat. Donec quis tincidunt mi. Pellentesque sit amet tellus sed ligula rhoncus lacinia. Etiam quis nibh eget massa efficitur bibendum ac nec dui. Sed sit amet lectus lacus. Maecenas sapien mi, vulputate sed justo eu, tincidunt sollicitudin nunc. Suspendisse sit amet mollis ante. Proin eu mollis magna. Mauris et urna nec lacus scelerisque consequat sed quis turpis."
            id="bookDescription"
            name="bookDescription"
          />
        </div>

        <input type={"hidden"} name={"bookUser"} value={userId} />
        <input type={"hidden"} name={"bookCoverImage"} value={urlParams.imageLinks} />
        <input type={"hidden"} name={"bookHighlightColor"} value={urlParams.highlightColor} />
        <input type={"hidden"} name={"bookId"} value={dbBookData.id} />
      </div>
    </div>
  )
}