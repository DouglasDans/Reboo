import StatsInDevelopment from "@/components/stats-in-development"

type Props = {}

export const metadata: Metadata = {
  title: "Adicionar Nova Sessão",
}


export default function page({ }: Props) {
  return (
    <div style={{ height: '400px' }}>
      <StatsInDevelopment />
    </div>
  )
}