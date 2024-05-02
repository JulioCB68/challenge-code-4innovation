import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { Header } from '../components/header'
import { Table } from '../components/table/table'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  X,
} from 'lucide-react'

import { useForm } from 'react-hook-form'

const tableFiltersSchema = z.object({
  productId: z.string().optional(),
  productName: z.string().optional(),
})

type TableFiltersSchema = z.infer<typeof tableFiltersSchema>

function App() {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  const productId = searchParams.get('productId')
  const productName = searchParams.get('productName')

  const { register, handleSubmit, reset } = useForm<TableFiltersSchema>({
    resolver: zodResolver(tableFiltersSchema),
    defaultValues: {
      productId: productId ?? '',
      productName: productName ?? '',
    },
  })

  function handleFilter({ productId, productName }: TableFiltersSchema) {
    setSearchParams((state) => {
      if (productId) {
        state.set('productId', productId)
      } else {
        state.delete('productId')
      }

      if (productName) {
        state.set('productName', productName)
      } else {
        state.delete('productName')
      }

      state.set('page', '1')

      return state
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('productId')
      state.delete('productName')
      state.set('page', '1')

      return state
    })

    reset({
      productId: '',
      productName: '',
    })
  }

  const [sort, setSort] = useState('')

  function handleSortDirection(direction: string) {
    setSort(direction)
  }

  return (
    <div className="h-auto min-h-screen dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="container mx-auto w-full py-3">
        <form
          onSubmit={handleSubmit(handleFilter)}
          className="items-center gap-2 rounded-md p-4"
        >
          <div className="flex items-center justify-between">
            <h1 className="pb-6 text-2xl font-semibold">Dados diários</h1>
            <button className="flex items-center rounded-md border bg-white px-3 py-1 hover:bg-gray-100/80 lg:hidden">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </button>
          </div>
          <div className="hidden items-center justify-between pb-4 lg:flex">
            <div className="flex w-full items-center gap-2">
              <span className="text-sm font-semibold">Filtros:</span>
              <input
                type="text"
                className="flex h-10 w-auto rounded-md border border-zinc-500 bg-transparent px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="ID do produto"
                {...register('productId')}
              />
              <input
                type="text"
                className="flex h-10 w-[320px] rounded-md border border-zinc-500 bg-transparent px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nome do produto"
                {...register('productName')}
              />
              <button
                type="submit"
                className="flex h-10 items-center rounded-md bg-muted-foreground/15 px-2.5 hover:bg-muted-foreground/25"
              >
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
              </button>
              <button
                onClick={handleClearFilters}
                className="dark:bg-dark-accent flex h-10 items-center whitespace-nowrap rounded-md border px-2.5 hover:bg-accent dark:hover:bg-accent-dark"
              >
                <X className="mr-2 h-4 w-4" />
                Remover filtros
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSortDirection('DESC')}
                className="dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border p-2 hover:bg-accent dark:hover:bg-accent-dark"
              >
                <ArrowDownWideNarrow className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleSortDirection('ASC')}
                className="items dark:bg-dark-accent flex h-10 w-10 justify-center rounded-md border p-2 hover:bg-accent dark:hover:bg-accent-dark"
              >
                <ArrowUpWideNarrow className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Table pageIndex={pageIndex} sort={sort} />
          <div className="flex items-center justify-between pt-4">
            <span className="text-sm text-muted-foreground">
              Total de 10 item(s)
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePaginate(pageIndex - 1)}
                className="dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-accent-dark"
                disabled={pageIndex === 0}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Página anterior</span>
              </button>
              <button
                onClick={() => handlePaginate(pageIndex + 1)}
                className="bg-dark-accent dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border hover:bg-accent disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-accent-dark"
                disabled={pageIndex === 1}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Próxima página</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
