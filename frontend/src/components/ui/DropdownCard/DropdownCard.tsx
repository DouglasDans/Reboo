"use client"

import { useEffect, useState } from "react"
import IconButton from "@/components/ui/buttons/IconButton"
import style from "@/styles/ui/dropdown-card/dropdown-card.module.scss"

type Props = {
  buttonIcon: React.ReactNode
  children: React.ReactNode
}

export default function DropdownCard({ children, buttonIcon }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  return (
    <div className={style.cardContainer}>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
        }}>
        {buttonIcon}
      </button>
      {CardContainer(isOpen, children)}
    </div>
  )
}

function CardContainer(isOpen: boolean, children: React.ReactNode) {
  if (isOpen) {
    return <div className={style.card}>{children}</div>
  }
}
