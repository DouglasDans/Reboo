'use client'

import Link from "next/link"
import styles from "./index.module.scss"
import Icon from "@/components/ui/Icon"
import { usePathname } from "next/navigation"

type Props = {
  params: {
    userId: number
  }
}

export default function Header({ params }: Props) {
  const pathname = usePathname()

  function getPageTitle(pathname: string) {
    if (pathname === `/${params.userId}`) {
      return "Dashboard"
    } else {
      if (pathname.includes(`/${params.userId}/library`)) {
        return "Minha Estante"
      }
      if (pathname.includes(`/${params.userId}/stats`)) {
        return "Estatísticas"
      }
    }
  }

  return (
    <div className={styles.container}>
      <h5>{getPageTitle(pathname)}</h5>

      <div className={styles.shortcutsWrapper}>
        <Link href={"#"}>
          <Icon name="timer_play" />
        </Link>
        <Link href={"/1/library/book/add"}>
          <Icon name="bookmark_add" />
        </Link>
        {/* <Link href={"#"}>
          <Icon name="notifications" />
        </Link> */}
        <Link href={"#"}>
          <Icon name="person" />
        </Link>
      </div>
    </div>
  )
}
