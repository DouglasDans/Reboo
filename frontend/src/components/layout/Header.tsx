import Link from "next/link"
import styles from "./header.module.scss"
import Icon from "../ui/icons/Icon"

type Props = {
  titlePage: string
}

export default function Header({ titlePage }: Props) {
  return (
    <div className={styles.container}>
      <h5>{titlePage}</h5>

      <div className={styles.shortcutsWrapper}>
        <Link href={"#"}>
          <Icon name="timer_play" />
        </Link>
        <Link href={"/1/library/book/add"}>
          <Icon name="bookmark_add" />
        </Link>
        {/* <Link href={"#"}>
          <Icon name="notifications" />
        </Link> */}
        <Link href={"#"}>
          <Icon name="person" />
        </Link>
      </div>
    </div>
  )
}
