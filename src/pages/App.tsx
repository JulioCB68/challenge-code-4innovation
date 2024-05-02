import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getData } from '@/api/request'
import Filters from '@/components/form/filters'
import Pagination from '@/components/pagination'
import { columns } from '@/components/table/columns'
import { useQuery } from '@tanstack/react-query'
import { Filter } from 'lucide-react'
import { Header } from '../components/header'
import { Table } from '../components/table/table'

function App() {
  const [sort, setSort] = useState('')
  const [totalCount, setTotalCount] = useState(0)

  const [searchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')

  const { data, isLoading } = useQuery({
    queryKey: ['table', pageIndex, productId, productName, sort],
    queryFn: getData,
  })

  return (
    <div className="h-auto min-h-screen dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="container mx-auto w-full py-3">
        <div className="flex items-center justify-between">
          <h1 className="pb-6 text-2xl font-semibold">Dados diários</h1>
          <button className="flex items-center rounded-md border bg-white px-3 py-1 hover:bg-gray-100/80 lg:hidden">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </button>
        </div>
        <Filters onChangeSort={setSort} />
        <Table
          pageIndex={pageIndex}
          sort={sort}
          data={data}
          columns={columns}
          isLoading={isLoading}
          setTotalCount={setTotalCount}
        />
        <Pagination pageIndex={pageIndex} totalCount={totalCount} />
      </div>
    </div>
  )
}

export default App
