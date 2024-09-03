'use client'

import { BookURLParamsContext } from "@/context/book/BookURLParamsProvider";
import { GoogleAPIResponseBook } from "@/types/googleBooksApi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

import styles from './index.module.scss'

export default function BookColorPickerMenu() {
  const urlParams = useContext(BookURLParamsContext) as GoogleAPIResponseBook

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams)
  const [color, setColor] = useState(urlParams.highlightColor);

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
      <HexColorPicker color={color} onChange={setColor} />
      <input className={styles.input} value={color} onChange={(e) => { setColor(e.target.value) }} type="text" placeholder="Digite a cor em Hex" />
    </div>
  )
}