import Image from 'next/image'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Link from 'next/link'

export default function LandingLinksContainer() {
  return (
    <section className={styles.container}>
      <Image src={"/reboo-logo-text.svg"} height={82} width={239} alt='Logo do aplicativo. 2 Livros encostados com o nome "Reboo"' />
      <span>Acesse, crie sua conta e comece a acompanhar seus hábitos de leitura!</span>
      <div>
        <Link href={"/login"}>
          <Button>Começar Agora</Button>
        </Link>
      </div>
    </section>
  )
}