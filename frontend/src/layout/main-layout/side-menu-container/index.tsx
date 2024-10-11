'use client'

import React, { useContext } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import Icon from "@/components/icon"
import NavLink from "./navlink-wrapper"
import { UserContext } from "@/context/user/UserProvider"
import { User } from "@/services/rebooAPI/api.types"

export default function SideMenu() {
  const user = useContext(UserContext) as User
  return (
    <div className={styles.container}>
      <div className={styles.imageLogo}>
        <Image
          src={"/reboo-logo-text.svg"}
          alt="Logo do Reboo"
          width={"117"}
          height={"40"}
        />
      </div>

      <div className={styles.navLinkWrapper}>
        <NavLink
          href={`/${user.id}/dashboard`}
          icon={<Icon name="home" />}
          title={"Dashboard"}
        />
        <NavLink
          href={`/${user.id}/library`}
          icon={<Icon name="book" />}
          title={"Minha Estante"}
        />
        <NavLink
          href={`/${user.id}/stats`}
          icon={<Icon name="bar_chart" />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
