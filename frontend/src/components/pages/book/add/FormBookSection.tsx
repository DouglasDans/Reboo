import styles from "@/styles/pages/book/add/form-book.module.scss"
import FormBookInfo from "./FormBookInfo"
import FormBookSituation from "./FormBookSituation"

export default function FormBookSection() {
  return (
    <section className={styles.container}>
      <div className={styles.titleGrid}>
        <h5>Informações do livro</h5>
        <h5>Situação do livro</h5>
      </div>

      <form className={styles.formGrid}>
        <div className={styles.rightForm}>
          <FormBookInfo />
        </div>
        <div className={styles.leftForm}>
          <FormBookSituation />
        </div>
      </form>
    </section>
  )
}
