'use client'

import { HexColorPicker } from "react-colorful";

import styles from './index.module.scss'

type Props = {
  highlightColorState: {
    highlightColor: string,
    setHighlightColor: any
  }
}

export default function ColorPickerMenu({ highlightColorState }: Props) {
  return (
    <div className={styles.container}>
      <h6>Cor do banner</h6>
      <HexColorPicker
        color={highlightColorState.highlightColor}
        onChange={highlightColorState.setHighlightColor} />
      <input className={styles.input} value={highlightColorState.highlightColor} onChange={(e) => { highlightColorState.setHighlightColor(e.target.value) }} type="text" placeholder="Digite a cor em Hex" />
    </div>
  )
}