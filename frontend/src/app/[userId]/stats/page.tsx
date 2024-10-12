import StatsInDevelopment from "@/components/stats-in-development"

type Props = {}

export default function page({ }: Props) {
  return (
    <div style={{ height: '400px' }}>
      <StatsInDevelopment />
    </div>
  )
}