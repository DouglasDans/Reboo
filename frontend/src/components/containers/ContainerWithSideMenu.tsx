import React, { Fragment, PropsWithChildren } from 'react'
import SideMenu from '../layout/SideMenu'
import style from '@/styles/containers/container-with-side-menu.module.scss'

export default function ContainerWithSideMenu({ children }: PropsWithChildren) {
  return (
    <div className={style.containerMain}>
      <SideMenu />
      <div>{children}</div>
    </div>
  )
}
