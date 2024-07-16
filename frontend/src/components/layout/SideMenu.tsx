import React from "react"
import styles from "@/styles/layout/side-menu.module.scss"
import Image from "next/image"
import SideMenuNavLink from "./SideMenuNavLink"
import { BarChartRounded, BookRounded, HomeRounded } from "@mui/icons-material"

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
          icon={<HomeRounded />}
          exact
          title={"Dashboard"}
        />
        <SideMenuNavLink
          href={"/library"}
          exact
          icon={<BookRounded />}
          title={"Minha Estante"}
        />
        <SideMenuNavLink
          href={"/stats"}
          exact
          icon={<BarChartRounded />}
          title={"Estatísticas"}
        />
      </div>
    </div>
  )
}
