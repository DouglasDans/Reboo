import React, { ReactNode } from 'react';
import styles from "./button.module.scss"

type Props = {
  children?: ReactNode
  startDecorator?: ReactNode
  endDecorator?: ReactNode
  variant?: "primary" | "secondary"
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

}

export default function Button({
  children,
  startDecorator,
  endDecorator,
  variant = "primary",
  onClick
}: Props) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${!children ? (styles.fixedWidth) : (styles.fitContentWidth)}`}
      onClick={onClick}
    >
      {startDecorator}
      {children}
      {endDecorator}
    </button>
  )

}
