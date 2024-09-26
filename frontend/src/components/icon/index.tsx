import 'material-symbols'

type Props = {
  name: string
  style?: "rounded" | "outlined" | "sharp"
}

export default function Icon({ name, style = "rounded" }: Props) {
  return (
    <span className={`icon material-symbols-${style}`}>{name}</span>
  )
}