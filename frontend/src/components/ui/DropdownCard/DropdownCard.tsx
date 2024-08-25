"use client"

import React, { useState, useEffect, useRef } from "react"
import style from "./dropdown-card.module.scss"

type Props = {
  buttonIcon: React.ReactElement
  children: React.ReactNode
}

export default function DropdownCard({ children, buttonIcon }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [cardRef])

  return (
    <div ref={cardRef} className={style.cardContainer}>
      {React.cloneElement(buttonIcon, {
        onClick: () => setIsOpen(!isOpen),
      })}
      {isOpen && <div className={style.card}>{children}</div>}
    </div>
  )
}
