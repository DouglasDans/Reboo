import { Book } from '@/services/rebooAPI/api.types'
import styles from './index.module.scss'
import Button from '@/components/ui/buttons/button'
import Icon from '@/components/ui/Icon'
import Link from 'next/link'

type Props = {
  book: Book
}

export default function ActionButtonsWrapper({ book }: Props) {
  return (
    <div className={styles.container}>
      <h5>Ações</h5>

      <div className={styles.wrapper}>
        <Button variant='secondary' startDecorator={<Icon name='timer_play' />}>
          Nova Sessão
        </Button>

        <Button variant='secondary' endDecorator={<Icon name='expand_all' />}>
          Status de Leitura
        </Button>

        <Link href={`./${book.id}/edit`} className={styles.linkAction}>
          <Button variant='secondary' startDecorator={<Icon name='edit' />}>
            Editar Livro
          </Button>
        </Link>

        <Button variant='secondary' startDecorator={<Icon name='delete' />}>
          Deletar Livro
        </Button>
      </div>
    </div>
  )
}