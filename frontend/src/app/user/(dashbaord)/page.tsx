import Header from '@/components/layout/Header'
import React, { Fragment } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Dashboard() {
  return (
    <Fragment>
      <Header titlePage="Dashboard" />

      Dash
    </Fragment>
  )
}
