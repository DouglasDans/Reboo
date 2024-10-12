'use client'

import Link from "next/link"
import styles from "./index.module.scss"
import Icon from "@/components/icon"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { UserContext } from "@/context/user/UserProvider"
import DropdownCardMenu from "@/components/dropdown-menu"
import UserOptionsMenu from "@/components/dropdown-menu/menus/UserOptionsMenu"
import { User } from "@/services/rebooAPI/api.types"


export default function Header() {
  const user = useContext(UserContext) as User
  const pathname = usePathname()

  function getPageTitle(pathname: string) {
    if (pathname.includes(`/${user.id}/dashboard`)) {
      return "Dashboard"
    } else {
      if (pathname.includes(`/${user.id}/library`)) {
        return "Minha Estante"
      }
      if (pathname.includes(`/${user.id}/stats`)) {
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
        <Link href={`/${user.id}/library/book/add`}>
          <Icon name="bookmark_add" />
        </Link>
        {/* <Link href={"#"}>
          <Icon name="notifications" />
        </Link> */}
        <DropdownCardMenu content={<UserOptionsMenu user={user} />}>
          <Link href={"#"}>
            <Icon name="person" />
          </Link>
        </DropdownCardMenu>
      </div>
    </div>
  )
}
