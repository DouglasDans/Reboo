'use client'

import React, { Fragment } from 'react'
import LargeScreenBanner from './lg-screen'
import { Book } from '@/services/rebooAPI/api.types'
import useMediaQuery from '@/hooks/useMediaQuery'
import SmallScreenBanner from './sm-screen'

type Props = {
  book: Book
}

export default function BookBanner({ book }: Props) {
  const isMobile = useMediaQuery('md')

  return (
    <Fragment>
      {isMobile ? <SmallScreenBanner book={book} /> : <LargeScreenBanner book={book} />}
    </Fragment>
  )

}