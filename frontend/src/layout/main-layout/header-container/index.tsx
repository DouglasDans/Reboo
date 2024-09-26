'use client'

import Link from "next/link"
import styles from "./index.module.scss"
import Icon from "@/components/ui/icon"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { UserIdContext } from "@/context/user/UserIdProvider"


export default function Header() {
  const userId = useContext(UserIdContext)
  const pathname = usePathname()

  function getPageTitle(pathname: string) {
    if (pathname.includes(`/${userId}/dashboard`)) {
      return "Dashboard"
    } else {
      if (pathname.includes(`/${userId}/library`)) {
        return "Minha Estante"
      }
      if (pathname.includes(`/${userId}/stats`)) {
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
