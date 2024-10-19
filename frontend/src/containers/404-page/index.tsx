import Link from 'next/link'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Icon from '@/components/icon'
import Image from 'next/image'

export default function Page404Container() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon name='sentiment_dissatisfied' />
      </div>
      <div className={styles.content}>
        <h3>Oops! Página não encontrada.</h3>
        <span>Parece que você se perdeu. A página que você está procurando não existe.</span>
        <small>HTTP 404</small>
      </div>
      <Link href={"/"}>
        <Button startDecorator={<Image src={"/reboo-logo.svg"} height={25} width={25} alt='Logo do Aplicativo Reboo' />} variant='secondary'>Começar do zero</Button>
      </Link>
    </div>
  )
}