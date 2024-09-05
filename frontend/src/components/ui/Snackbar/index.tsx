'use client'

import styles from './index.module.scss'
import React, { useEffect } from 'react';
import Icon from '@/components/ui/Icon';

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
      <Icon name='info' />
      <div className={styles.content}>
        <h6>{title}</h6>
        <small>{message}</small>
      </div>
    </div>
  )
}
