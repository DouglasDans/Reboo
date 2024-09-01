"use client"

import React, { useState, useEffect, useRef } from "react"
import style from "./index.module.scss"
import Icon from "../icons/Icon"
import Button from "../buttons/button"

type Props = {
  buttonIcon: string
  children: React.ReactNode
}

export default function DropdownCardMenu({ children, buttonIcon }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const button = (
    <Button startDecorator={<Icon name={buttonIcon} />} variant="secondary" />
  )

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
      {React.cloneElement(button, {
        onClick: () => setIsOpen(!isOpen),
      })}
      {isOpen && <div className={style.card}>{children}</div>}
    </div>
  )
}
