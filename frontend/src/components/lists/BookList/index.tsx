import { Book } from '@/services/rebooAPI/api.types';
import styles from './index.module.scss';
import BookListItem from './Item';

type Props = {
  title: string,
  wrap?: boolean
  bookList: Book[],
  bookCounter?: boolean
}

export default function BookList({ bookCounter = false, wrap = false, title = "Sem Título", bookList }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h5>{title}</h5>
        <div>
          <h5>{bookCounter ? bookList.length + " Livros" : ""}</h5>
        </div>
      </div>
      <div className={styles.listContent + " " + (wrap ? styles.flexWrap : "")}>
        {bookList.map(book => {
          return (<BookListItem book={book} key={book.id} />)
        })}
      </div>
    </section>
  );
}
