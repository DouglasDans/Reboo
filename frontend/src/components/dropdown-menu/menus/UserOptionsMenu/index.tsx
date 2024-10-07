import Icon from '@/components/icon'
import styles from './index.module.scss'
import Button from '@/components/buttons/button'
import Link from 'next/link'

export default function UserOptionsMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Icon name="person" />
        <div className={styles.data}>
          <span>User</span>
          <small>userEmail</small>
        </div>
      </div>
      <div className={styles.options}>
        <Link href={"/logout"}>
          <Button startDecorator={<Icon name='logout' />}>Fazer Logout</Button>
        </Link>
      </div>
    </div>
  )
}