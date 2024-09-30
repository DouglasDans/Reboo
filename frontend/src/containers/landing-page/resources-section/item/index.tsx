import styles from './index.module.scss'
import Icon from '@/components/icon'

type Props = {
  data: {
    icon: string,
    title: string,
    text: string
  }
}

export default function ResourceItem({ data }: Props) {
  return (
    <div className={styles.resource}>
      <div className={styles.icon}>
        <Icon name={data.icon} />
      </div>
      <div className={styles.content}>
        <h5>{data.title}</h5>
        <span>{data.text}</span>
      </div>
    </div>
  )
}