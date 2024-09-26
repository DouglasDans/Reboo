import styles from './index.module.scss'

import Header from './header-container'
import { Fragment, PropsWithChildren } from 'react'
import Footer from '@/components/ui/Footer'

export default function LandingPageLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}