import React, { ReactNode } from 'react';
import styles from "./primary-button.module.scss"

type Props = {
  children: ReactNode
  startDecorator?: ReactNode
}

export default function PrimaryButton({ children, startDecorator = null }: Props) {
  return (
    <button className={styles.button}>
      {startDecorator}
      {children}
    </button>
  )

}
