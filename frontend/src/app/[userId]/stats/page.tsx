import StatsInDevelopment from "@/components/stats-in-development"
import { Metadata } from "next"

type Props = {}

export const metadata: Metadata = {
  title: "Estatísticas",
}


export default function page({ }: Props) {
  return (
    <div style={{ height: '400px' }}>
      <StatsInDevelopment />
    </div>
  )
}