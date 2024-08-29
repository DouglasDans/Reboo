import React from "react"
import styles from "./side-menu.module.scss"
import Image from "next/image"
import SideMenuNavLink from "./SideMenuNavLink"
import Icon from "../icons/Icon"

export default function SideMenu() {
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
        <SideMenuNavLink
          href="/user"
          icon={<Icon name="home" />}
          exact
          title={"Dashboard"}
        />
        <SideMenuNavLink
          href={"/library"}
          exact
          icon={<Icon name="book" />}
          title={"Minha Estante"}
        />
        <SideMenuNavLink
          href={"/stats"}
          exact
          icon={<Icon name="bar_chart" />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
