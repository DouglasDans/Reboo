import styles from './index.module.scss'

import Header from './Header'
import { Fragment, PropsWithChildren } from 'react'

export default function LandingPageLayout({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}