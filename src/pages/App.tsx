import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getData } from '@/api/request'
import Button from '@/components/form/button'
import Filters from '@/components/form/filters'
import Input from '@/components/form/input'
import { columns } from '@/components/table/columns'
import Pagination from '@/components/table/pagination'
import { useQuery } from '@tanstack/react-query'
import { Filter, Search, X } from 'lucide-react'
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

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="h-auto min-h-screen dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="container mx-auto w-full p-4">
        <div className="flex items-center justify-between pt-4">
          <h1 className="text-2xl font-semibold">Dados diários</h1>
          <div className="relative lg:hidden">
            <Button
              onClick={toggleDropdown}
              className="w-full p-4 dark:bg-accent-dark dark:hover:bg-zinc-600/40 lg:hidden"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
            {isOpen && (
              <div className="absolute right-0 top-full z-10 mt-2 flex h-auto w-80 flex-col rounded border border-gray-200 bg-zinc-50 shadow-lg dark:bg-zinc-900">
                <form className="flex flex-col gap-4 p-4">
                  <Input className="w-auto" placeholder="ID do produto" />
                  <Input className="w-auto" placeholder="Nome do produto" />
                  <Button
                    type="submit"
                    className="w-auto bg-muted-foreground/15 px-2.5 hover:bg-muted-foreground/25"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Filtrar resultados
                  </Button>
                  <Button className="w-auto px-2.5 hover:bg-accent dark:hover:bg-accent-dark">
                    <X className="mr-2 h-4 w-4" />
                    Remover filtros
                  </Button>
                </form>
              </div>
            )}
          </div>
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
