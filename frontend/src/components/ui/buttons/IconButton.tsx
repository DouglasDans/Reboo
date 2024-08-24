import styles from "@/styles/ui/buttons/icon-button.module.scss"

type Props = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
