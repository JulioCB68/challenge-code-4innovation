import { getData } from '@/api/request'
import { useQuery } from '@tanstack/react-query'
import { columns } from './columns'

export function Table() {
  const { data: table } = useQuery({
    queryKey: ['table'],
    queryFn: getData,
  })

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
        </tbody>
      </table>
    </div>
  )
}
