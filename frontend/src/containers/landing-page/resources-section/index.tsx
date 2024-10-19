import styles from './index.module.scss'
import ResourceItem from './item'

export default function LandingResourcesContainer() {
  return (
    <section className={styles.container}>
      <h1>Uma nova forma de gerenciar seus livros!</h1>
      <div className={styles.resourcesWrapper}>

        <ResourceItem data={{
          icon: 'collections_bookmark',
          title: "Organize sua estante virtual",
          text: "Adicione livros facilmente buscando pelo ISBN. Crie coleções personalizadas para organizar seus livros."
        }} />

        <ResourceItem data={{
          icon: 'timer_play',
          title: "Acompanhe suas leituras",
          text: "Leia, crie sessões de leitura, defina metas diárias, mensais e anuais, e veja quantas páginas você lê em média por dia."
        }} />

        <ResourceItem data={{
          icon: 'chart_data',
          title: "Visualize seu progresso",
          text: "Gráficos interativos mostram seu desempenho, seus hábitos de leitura e muito mais."
        }} />

      </div>
    </section>
  )
}