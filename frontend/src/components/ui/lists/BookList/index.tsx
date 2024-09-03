import styles from './index.module.scss';
import BookListItem from './Item';

type Props = {
  listTitle: string,
  wrap?: boolean
  bookList: Array<{
    title: string,
    authors: string,
    coverImage: string
  }>
}

export default function BookList({ wrap = false, listTitle = "Sem Título", bookList }: Props) {

  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h5>{listTitle}</h5>
      </div>
      <div className={styles.listContent + " " + (wrap ? styles.flexWrap : "")}>
        {bookList.map(book => {
          return (<BookListItem book={book} />)
        })}
      </div>
    </section>
  );
}
