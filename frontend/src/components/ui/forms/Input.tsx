import styles from '@/styles/ui/forms/input.module.scss'

type Props = {
  type?: string
  placeholder: string
  defaultValue?: string | number
  id?: string
  name?: string
}

export default function Input({ defaultValue = '', type = 'text', placeholder = "", id, name }: Props) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      id={id}
      name={name}
    />
  )
}