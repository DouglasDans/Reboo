"use client"

import Link from "next/link"
import styles from "./side-menu-nav-link.module.scss"
import { usePathname, useRouter } from "next/navigation"

type Props = {
  title: string
  icon: any
  href: string
  exact: boolean
}

export default function SideMenuNavLink({ title, icon, href, exact }: Props) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  console.log(pathname, href);


  return (
    <Link
      href={href}
      className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.span}>{title}</span>
    </Link>
  )
}
