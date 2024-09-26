'use client'

import React, { useContext } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import Icon from "@/components/ui/icon"
import NavLink from "./navlink-wrapper"
import { UserIdContext } from "@/context/user/UserIdProvider"
import { usePathname } from "next/navigation"

export default function SideMenu() {
  const userId = useContext(UserIdContext) as number

  const pathname = usePathname()
  // const isActive = pathname.includes(href) ? true : false

  return (
    <div className={styles.container}>
      <div>
        <Image
          src={"/reboo-logo-text.svg"}
          alt="Logo do Reboo"
          width={"117"}
          height={"40"}
        />
      </div>

      <div className={styles.navLinkWrapper}>
        <NavLink
          href={`/${userId}/dashboard`}
          icon={<Icon name="home" />}
          title={"Dashboard"}
        />
        <NavLink
          href={`/${userId}/library`}
          icon={<Icon name="book" />}
          title={"Minha Estante"}
        />
        <NavLink
          href={`/${userId}/stats`}
          icon={<Icon name="bar_chart" />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
