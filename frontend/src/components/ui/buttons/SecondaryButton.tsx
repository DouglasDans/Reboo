import { PropsWithChildren } from "react"
import style from "./secondary-button.module.scss"

export default function SecondaryButton({ children }: PropsWithChildren) {
  return <button className={style.button}>{children}</button>
}
