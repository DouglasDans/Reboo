import StatsInDevelopment from "@/components/stats-in-development"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adicionar Nova Sessão",
}

export default function page() {
  return (
    <div style={{ height: '400px' }}>
      <StatsInDevelopment />
    </div>
  )
}