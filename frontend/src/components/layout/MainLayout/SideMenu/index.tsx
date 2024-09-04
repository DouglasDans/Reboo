import React from "react"
import styles from "./index.module.scss"
import Image from "next/image"
import Icon from "@/components/ui/icons/Icon"
import NavLink from "./NavLink"

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
        <NavLink
          href="/1/"
          icon={<Icon name="home" />}
          exact
          title={"Dashboard"}
        />
        <NavLink
          href={"/1/library"}
          exact
          icon={<Icon name="book" />}
          title={"Minha Estante"}
        />
        <NavLink
          href={"/1/stats"}
          exact
          icon={<Icon name="bar_chart" />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
