'use client'

import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import { useRouter } from 'next/navigation'

type Props = {
  message: string
}

export default function ErrorPageContainer({ message }: Props) {
  const router = useRouter();


  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon name='sentiment_dissatisfied' />
      </div>
      <div className={styles.content}>
        <h3>Oops! Ocorreu um erro inesperado.</h3>
        <span>Parece que você esbarrou em alguns problemas técnicos.</span>
        <small>{message}</small>
      </div>
      <Button onClick={() => router.back()} variant='secondary'>
        Voltar para a página anterior
      </Button>
    </div>
  )
}