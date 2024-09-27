import { Fragment, ReactNode } from "react"
import SideMenu from "./side-menu-container"
import ContentContainer from "./content-container"
import styles from './index.module.scss'
import Header from "./header-container"
import Footer from "@/components/footer"

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <Fragment>
      <SideMenu />
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          <ContentContainer>
            {children}
          </ContentContainer>
        </div>
        <Footer />
      </div>
    </Fragment>
  )
}
