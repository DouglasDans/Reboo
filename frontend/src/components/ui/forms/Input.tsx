import styles from '@/styles/ui/forms/input.module.scss'

type Props = {
  type?: string
  placeholder: string
  id?: string
  name?: string
}

export default function Input({ type = 'text', placeholder = "", id, name }: Props) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
    />
  )
}