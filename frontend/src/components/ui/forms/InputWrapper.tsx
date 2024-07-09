import styles from '@/styles/ui/forms/input-wrapper.module.scss'
import Input from './Input'
import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
type Props = {}

export default function InputWrapper({ }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <label>Nome</label>
        <Input placeholder="978-90-274-3964-2" id="nomeBook" name="nomeBook" />
      </div>
      <div className={styles.input}>
        <label>Autor</label>
        <Input placeholder="978-90-274-3964-2" id="autorNook" name="autorNook" />
      </div>

      <div className={styles.inputWrapperGrid}>
        <div className={styles.input}>
          <label>Data de Publicação</label>
          <Input placeholder="978-90-274-3964-2" id="publiDataBook" name="publiDataBook" />
        </div>
        <div className={styles.input}>
          <label>Editora</label>
          <Input placeholder="978-90-274-3964-2" id="editoraBook" name="editoraBook" />
        </div>
        <div className={styles.input}>
          <label>Número de páginas</label>
          <Input placeholder="978-90-274-3964-2" id="pagBook" name="pagBook" />
        </div>
        <div className={styles.input}>
          <label>ISBN</label>
          <Input placeholder="978-90-274-3964-2" id="isbnBook" name="isbnBook" />
        </div>
      </div>

      <div className={styles.input}>
        <label>Descrição</label>
        <textarea placeholder="978-90-274-3964-2" id="descBook" name="descBook" />
      </div>

    </div>
  )
}