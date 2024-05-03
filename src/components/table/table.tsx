import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { IData } from '@/types/request'
import { formatCurrency } from '@/utils/format-currency'
import { IColumnTable } from './columns'
import { TableSkeleton } from './table-skeleton'

interface ITableProps {
  pageIndex: number
  sort: string
  data: IData[] | undefined
  columns: IColumnTable[]
  isLoading: boolean
  setTotalCount: (number: number) => void
}

export function Table({
  pageIndex,
  sort,
  data,
  isLoading,
  columns,
  setTotalCount,
}: ITableProps) {
  const [searchParams] = useSearchParams()

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')

  const filteredData = data
    ?.filter((item) => {
      let matchesFilter = true

      if (productId && String(item.portfolioProductId) !== productId) {
        matchesFilter = false
      }

      if (productName && !item.productName.includes(productName)) {
        matchesFilter = false
      }

      return matchesFilter
    })
    .sort((a, b) => {
      if (sort === 'ASC') {
        return a.value - b.value
      } else if (sort === 'DESC') {
        return b.value - a.value
      } else {
        return 0
      }
    })

  const startIndex = pageIndex * 10
  const endIndex = (pageIndex + 1) * 10

  const table = filteredData?.slice(startIndex, endIndex)

  useEffect(() => {
    if (filteredData) {
      setTotalCount(filteredData?.length)
    }
  }, [filteredData, setTotalCount])

  return (
    <div className="w-full overflow-x-auto rounded-md border border-zinc-700/50 shadow-md">
      <table className="w-full rounded-md text-sm">
        <thead>
          <tr className="">
            {columns.map((columnName) => (
              <th
                key={columnName.key}
                className="h-12 whitespace-nowrap border-b border-zinc-700/50 px-4 text-left font-medium last:text-right"
              >
                {columnName.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading && <TableSkeleton />}
          {table?.map((item) => (
            <>
              <tr className="cursor-pointer border-b border-zinc-700/50 last:border-none hover:bg-zinc-200/50 dark:hover:bg-zinc-800">
                <td className="p-4">{item.portfolioProductId}</td>
                <td className="p-4">{item.productName}</td>
                <td className="p-4">{formatCurrency(item.correctedQuota)}</td>
                <td className="p-4 text-right">{formatCurrency(item.value)}</td>
              </tr>
            </>
          ))}
          {data && table!.length === 0 && (
            <tr className="border-b border-zinc-700/50">
              <td className="w-full p-4 text-base">
                Nenhnum resultado encontrado!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
