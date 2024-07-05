import React from 'react'
import styles from '@/styles/layout/side-menu.module.scss'
import Image from 'next/image'
import SideMenuItem from './SideMenuItem'
import {
  BarChartRounded,
  BookRounded,
  HomeMaxRounded,
  HomeMiniRounded,
  HomeRounded,
  HouseRounded,
} from '@mui/icons-material'

type Props = {}

export default function SideMenu({}: Props) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={'/reboo-logo-text.svg'}
          alt="Logo do Reboo"
          width={'117'}
          height={'40'}
        />
      </div>

      <div className={styles.navLinkWrapper}>
        <SideMenuItem icon={<HomeRounded />} title={'Dashboard'} active />
        <SideMenuItem icon={<BookRounded />} title={'Minha Estante'} />
        <SideMenuItem icon={<BarChartRounded />} title={'Estatísticas'} />
      </div>
    </div>
  )
}
