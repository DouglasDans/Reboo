import Link from 'next/link'
import styles from '@/styles/layout/side-menu-item.module.scss'

type Props = {
  title: string
  icon: any
  active?: boolean
}

export default function SideMenuItem({ title, icon, active = false }: Props) {
  return (
    <Link
      href={'#'}
      className={`${styles.container} ${active ? styles.active : ''}`}
    >
      <div className={styles.icon}>{icon}</div>
      <span className={styles.span}>{title}</span>
    </Link>
  )
}
