'use client'

import { BookURLParamsContext } from "@/context/book/BookURLParamsProvider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styles from './index.module.scss'
import { Book } from "@/services/rebooAPI/api.types";

export default function BookColorPickerMenu() {
  const urlParams = useContext(BookURLParamsContext) as Book

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  const [color, setColor] = useState<string | null>(urlParams.highlightColor);

  useEffect(() => {
    if (color) {
      params.set("highlightColor", color)
    } else {
      params.delete("highlightColor")
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [color]);

  return (
    <div className={styles.container}>
      <h6>Cor de destaque</h6>
      <HexColorPicker color={color ? color : "#000"} onChange={setColor} />
      <input className={styles.input} value={color ? color : "#000"} onChange={(e) => { setColor(e.target.value) }} type="text" placeholder="Digite a cor em Hex" />
    </div>
  )
}