import { Fragment, PropsWithChildren, ReactNode } from "react"
import SideMenu from "./SideMenu"
import ContentContainer from "./ContentContainer"
import styles from './index.module.scss'
import Header from "./Header"
import Footer from "@/components/ui/Footer"

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
