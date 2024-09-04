import { PropsWithChildren } from "react"
import styles from './index.module.scss'

export default function ContentContainer({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}