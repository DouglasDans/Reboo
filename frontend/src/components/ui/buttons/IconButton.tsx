import { PropsWithChildren } from "react"
import styles from "@/styles/ui/buttons/icon-button.module.scss"

export default function IconButton({ children }: PropsWithChildren) {
  return <button className={styles.button}>{children}</button>
}
