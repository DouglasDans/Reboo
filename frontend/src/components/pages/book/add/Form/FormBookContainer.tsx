import styles from "@/styles/pages/book/add/form-book.module.scss"
import BookInfo from "./BookInfo"
import BookSituation from "./BookSituation"

export default function FormBookSection() {

  async function acs(formData: FormData) {
    'use server'
    console.log(formData.get('bookStatus'));

  }

  return (
    <section className={styles.container}>
      <div className={styles.titleGrid}>
        <h5>Informações do livro</h5>
        <h5>Situação do livro</h5>
      </div>

      <form action={acs} className={styles.formGrid}>
        <div className={styles.rightForm}>
          <BookInfo />
        </div>
        <div className={styles.leftForm}>
          <BookSituation />
        </div>
      </form>
    </section>
  )
}
