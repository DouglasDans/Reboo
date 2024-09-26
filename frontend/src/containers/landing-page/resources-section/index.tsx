import Icon from '@/components/ui/icon'
import styles from './index.module.scss'

type Props = {}

export default function LandingResourcesContainer({ }: Props) {
  return (
    <section className={styles.container}>
      <h1>Uma nova forma de gerenciar seus livros!</h1>
      <div className={styles.resourcesWrapper}>

        <div className={styles.resource}>
          <div className={styles.icon}>
            <Icon name='collections_bookmark' />
          </div>
          <h5>Organize sua estante virtual</h5>
          <span>Adicione livros facilmente buscando pelo ISBN. Crie coleções personalizadas para organizar seus livros.</span>
        </div>

        <div className={styles.resource}>
          <div className={styles.icon}>
            <Icon name='timer_play' />
          </div>
          <h5>Acompanhe suas leituras</h5>
          <span>Leia, crie sessões de leitura, defina metas diárias, mensais e anuais, e veja quantas páginas você lê em média por dia.</span>
        </div>

        <div className={styles.resource}>
          <div className={styles.icon}>
            <Icon name='collections_bookmark' />
          </div>
          <h5>Visualize seu progresso</h5>
          <span>Gráficos interativos mostram seu desempenho, seus hábitos de leitura e muito mais.</span>
        </div>

      </div>
    </section>
  )
}