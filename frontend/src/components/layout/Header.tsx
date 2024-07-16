import {
  AccountCircleRounded,
  BookmarkAddRounded,
  NotificationsRounded,
  PersonRounded,
  TimerRounded,
} from "@mui/icons-material"
import Link from "next/link"
import styles from "@/styles/layout/header.module.scss"

type Props = {
  titlePage: string
}

export default function Header({ titlePage }: Props) {
  return (
    <div className={styles.container}>
      <h5>{titlePage}</h5>

      <div className={styles.shortcutsWrapper}>
        <Link href={"#"}>
          <TimerRounded fontSize="large" />
        </Link>
        <Link href={"/user/library/book/add"}>
          <BookmarkAddRounded fontSize="large" />
        </Link>
        <Link href={"#"}>
          <NotificationsRounded fontSize="large" />
        </Link>
        <Link href={"#"}>
          <AccountCircleRounded fontSize="large" />
        </Link>
      </div>
    </div>
  )
}
