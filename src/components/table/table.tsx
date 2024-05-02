import { useQuery } from '@tanstack/react-query'

import { getData } from '@/api/request'
import { useSearchParams } from 'react-router-dom'
import { columns } from './columns'
import { TableSkeleton } from './table-skeleton'

export function Table({ pageIndex }: { pageIndex: number }) {
  const [searchParams] = useSearchParams()

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')

  const { data, isLoading: isLoadingTable } = useQuery({
    queryKey: ['table', pageIndex, productId, productName],
    queryFn: getData,
  })

  // Verifica se os parâmetros de busca estão definidos para aplicar os filtros
  const filteredData = data?.filter((item) => {
    if (productId && productName) {
      return (
        String(item.portfolioProductId) === productId &&
        item.productName === productName
      )
    } else if (productId) {
      return String(item.portfolioProductId) === productId
    } else if (productName) {
      return item.productName === productName
    } else {
      return true // Retorna verdadeiro se nenhum filtro estiver definido
    }
  })

  // Cálculo dos índices de início e fim para a paginação
  const startIndex = pageIndex * 10
  const endIndex = (pageIndex + 1) * 10

  // Aplicação da paginação após a filtragem
  const table = filteredData?.slice(startIndex, endIndex)

  return (
    <div className="w-full rounded-md border border-zinc-700/50 shadow-md">
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
          {isLoadingTable && <TableSkeleton />}
          {table?.map((item) => (
            <>
              <tr className="cursor-pointer border-b border-zinc-700/50 last:border-none hover:bg-zinc-200/50 dark:hover:bg-zinc-800">
                <td className="p-4">{item.portfolioProductId}</td>
                <td className="p-4">{item.productName}</td>
                <td className="p-4">{item.correctedQuota}</td>
                <td className="p-4 text-right">{item.value}</td>
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
