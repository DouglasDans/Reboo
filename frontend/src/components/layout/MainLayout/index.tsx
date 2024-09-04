import { Fragment, PropsWithChildren, ReactNode } from "react"
import SideMenu from "./SideMenu"
import ContentContainer from "./ContentContainer"
import styles from './index.module.scss'
import Header from "./Header"

type Props = {
  children: ReactNode
  params: {
    userId: number
  }
}

export default function MainLayout({ children, params }: Props) {
  return (
    <Fragment>
      <SideMenu />
      <div className={styles.container}>
        <div className={styles.content}>
          <Header params={params} />
          <ContentContainer>
            {children}
          </ContentContainer>
        </div>
        {/* footer */}
      </div>
    </Fragment>
  )
}
