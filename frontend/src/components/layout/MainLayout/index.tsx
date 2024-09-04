import { Fragment, PropsWithChildren } from "react"
import SideMenu from "./SideMenu"
import ContentContainer from "./ContentContainer"
import styles from './index.module.scss'
import Header from "./Header"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <SideMenu />
      <div className={styles.container}>
        <div className={styles.content}>
          <Header titlePage="teste" />
          <ContentContainer>
            {children}
          </ContentContainer>
        </div>
        {/* footer */}
      </div>
    </Fragment>
  )
}
