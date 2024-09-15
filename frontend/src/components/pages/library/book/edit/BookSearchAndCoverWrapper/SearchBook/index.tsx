import styles from './index.module.scss'
import SearchBookForm from './Form'

export default function SearchBookContainer() {
  return (
    <div className={styles.container}>
      <div className={styles.titleSearchISBN}>
        <h5>Editar informações do Livro</h5>
        <small>
          Atualize as informações do livro informando seu ISBN
          <br />
          Obs: Isso substitui todas as informações já cadastradas
        </small>
      </div>
      <SearchBookForm />
    </div>
  )
}