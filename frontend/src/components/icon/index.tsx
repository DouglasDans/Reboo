import 'material-symbols'

type Props = {
  name: string
  style?: "rounded" | "outlined" | "sharp"
  color?: string
}

export default function Icon({ color, name, style = "rounded" }: Props) {
  const styleColor = color ? {
    color
  } : {}

  return (
    <span className={`icon material-symbols-${style}`} style={styleColor}>{name}</span>
  )
}