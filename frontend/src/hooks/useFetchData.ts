import { useEffect, useState } from "react"

export default function useFetchData(endpoint: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(endpoint)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [endpoint])

  return { data, loading, error }
}
