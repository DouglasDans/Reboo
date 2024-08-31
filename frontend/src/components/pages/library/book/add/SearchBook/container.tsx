import styles from './container.module.scss'
import SearchBookForm from './form'

export default function SearchBookContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSearchISBN}>
        <h5>Buscar informações do livro</h5>
        <small>
          Busque informações do livro automaticamente informando seu ISBN
        </small>
      </div>
      <SearchBookForm />
    </div>
  )
}