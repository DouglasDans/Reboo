import React, { PropsWithChildren } from "react"
import SideMenu from "../layout/SideMenu"
import style from "./container-with-side-menu.module.scss"

export default function ContainerWithSideMenu({ children }: PropsWithChildren) {
  return (
    <div className={style.containerMain}>
      <SideMenu />
      <div className={style.contentMain}>{children}</div>
    </div>
  )
}
