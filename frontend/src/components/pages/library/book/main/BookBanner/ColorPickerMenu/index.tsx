'use client'

import { useState } from "react";
import { HexColorPicker } from "react-colorful";

import styles from './index.module.scss'

export default function BannerColorPickerMenu() {
  const [color, setColor] = useState("fff");

  return (
    <div className={styles.container}>
      <h6>Cor do banner</h6>
      <HexColorPicker color={color} onChange={setColor} />
      <input className={styles.input} value={color} onChange={(e) => { setColor(e.target.value) }} type="text" placeholder="Digite a cor em Hex" />
    </div>
  )
}