import { useEffect, useState } from 'react'

import { getData } from '@/api/request'
import { IData } from '@/types/request'
import { columns } from './columns'

export function Table() {
  const [data, setData] = useState<IData[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData()
        setData(response.data.dailyEquityByPortfolioChartData)
      } catch (error) {
        setError('Erro ao obter os dados')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>Carregando...</div>
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>
  }

  return (
    <div className="w-full rounded-md border border-zinc-700/50 shadow-md">
      <table className="w-full rounded-md text-sm">
        <thead>
          <tr className="">
            {columns.map((columnName) => (
              <th
                key={columnName.key}
                className="h-12 border-b border-zinc-700/50 px-4 text-left font-medium last:text-right"
              >
                {columnName.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <>
              <tr className="cursor-pointer border-b border-zinc-700/50 last:border-none hover:bg-zinc-200/50 dark:hover:bg-zinc-800">
                <td className="p-4">{item.portfolioProductId}</td>
                <td className="p-4">{item.productName}</td>
                <td className="p-4">{item.correctedQuota}</td>
                <td className="p-4 text-right">{item.value}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}
