import { PropsWithChildren } from "react"
import styles from '@/styles/ui/buttons/primary-button.module.scss'

export default function PrimaryButton({ children }: PropsWithChildren) {
  return (
    <button className={styles.button}>{children}</button>
  )
}