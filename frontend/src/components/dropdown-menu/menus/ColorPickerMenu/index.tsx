'use client'

import { HexColorPicker } from "react-colorful";

import styles from './index.module.scss'

type Props = {
  highlightColorState: {
    highlightColor: string | null,
    setHighlightColor: React.Dispatch<React.SetStateAction<string | null>>;
  }
}

export default function ColorPickerMenu({ highlightColorState }: Props) {
  return (
    <div className={styles.container}>
      <h6>Cor do banner</h6>
      <HexColorPicker
        color={highlightColorState.highlightColor ? highlightColorState.highlightColor : "#000"}
        onChange={highlightColorState.setHighlightColor} />
      <input
        className={styles.input}
        value={highlightColorState.highlightColor ? highlightColorState.highlightColor : "#000"}
        onChange={(e) => { highlightColorState.setHighlightColor(e.target.value) }}
        type="text"
        placeholder="Digite a cor em Hex" />
    </div>
  )
}