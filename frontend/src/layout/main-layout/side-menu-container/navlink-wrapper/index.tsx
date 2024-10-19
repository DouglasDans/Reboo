"use client"

import Link from "next/link"
import styles from "./index.module.scss"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type Props = {
  title: string
  icon: ReactNode
  href: string
}

export default function NavLink({ title, icon, href }: Props) {
  const pathname = usePathname()
  const isActive: boolean = pathname.includes(href) ? true : false

  return (
    <Link
      href={href}
      className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.span}>{title}</span>
    </Link>
  )
}
