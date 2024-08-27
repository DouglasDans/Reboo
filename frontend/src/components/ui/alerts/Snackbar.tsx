'use client'

import { InfoRounded } from '@mui/icons-material'
import styles from './snackbar.module.scss'
import React, { useEffect } from 'react';

type Props = {
  title: string
  message: string
  open: boolean
}

export default function Snackbar({ title, message, open }: Props) {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [open]);

  return (
    <div className={styles.snackbar + " " + (isVisible ? styles.active : "")}>
      <InfoRounded />
      <div className={styles.content}>
        <h6>{title}</h6>
        <small>{message}</small>
      </div>
    </div>
  )
}
