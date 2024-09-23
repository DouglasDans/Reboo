import Link from 'next/link'
import styles from './index.module.scss'
import Button from '@/components/ui/buttons/button'
import Image from 'next/image'

type Props = {}

export default function LandingBanner({ }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Organize seus livros e veja suas estatísticas de leitura</h1>
        <span>O Reboo, seu companheiro ideal no mundo literário!</span>
        <Link href={"/login"}>
          <Button>Começar Agora</Button>
        </Link>
      </div>
      <Image className={styles.image} src={"/dash.png"} height={1440} width={1024} alt='Imagem mostrando a interface da dashboard do aplicativo Reboo' />
    </div>
  )
}