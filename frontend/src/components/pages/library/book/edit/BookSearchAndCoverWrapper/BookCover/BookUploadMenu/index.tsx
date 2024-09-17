import BookUploadForm from './Form'
import styles from './index.module.scss'

export default function BookUploadMenu() {
  return (
    <div className={styles.container}>
      <h6>Adicionar capa</h6>
      <BookUploadForm />
    </div>
  )
}