import Icon from '@/components/icon'
import styles from './index.module.scss'
import Link from 'next/link'
import Button from '@/components/buttons/button'

export default function BookCardPlaceholder() {
  return (
    <div className={styles.container}>
      <div>
        <Icon name='book_2' />
        <h6>Você ainda não leu nada recentemente.</h6>
        <span>Que tal mergulhar em uma nova leitura e adicionar o seu próximo favorito aqui?</span>
        <Link href={"library/book/add"} className={styles.link}>
          <Button startDecorator={<Icon name='bookmark_add' />} variant='secondary'>Adicionar novo livro</Button>
        </Link>
      </div>
    </div>
  )
}