import Button from '@/components/form/button'
import Input from '@/components/form/input'
import { zodResolver } from '@hookform/resolvers/zod'

import { ArrowDownWideNarrow, ArrowUpWideNarrow, Search, X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

const tableFiltersSchema = z.object({
  productId: z.string().optional(),
  productName: z.string().optional(),
})

type TableFiltersSchema = z.infer<typeof tableFiltersSchema>

interface IFilterPorps {
  onChangeSort: (direction: string) => void
}

export default function Filters({ onChangeSort }: IFilterPorps) {
  const [searchParams, setSearchParams] = useSearchParams()

  const productName = searchParams.get('productName')
  const productId = searchParams.get('productId')

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

  function handleSortDirection(direction: string) {
    onChangeSort(direction)
  }
  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="items-center gap-2 rounded-md p-4"
    >
      <div className="hidden items-center justify-between pb-4 lg:flex">
        <div className="flex w-full items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input
            className="w-auto "
            placeholder="ID do produto"
            {...register('productId')}
          />
          <Input
            className="w-[320px] "
            placeholder="Nome do produto"
            {...register('productName')}
          />
          <Button
            type="submit"
            className="w-auto bg-muted-foreground/15 px-2.5 hover:bg-muted-foreground/25"
          >
            <Search className="mr-2 h-4 w-4" />
            Filtrar resultados
          </Button>
          <Button
            onClick={handleClearFilters}
            className="w-auto px-2.5 hover:bg-accent dark:hover:bg-accent-dark"
          >
            <X className="mr-2 h-4 w-4" />
            Remover filtros
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={() => handleSortDirection('DESC')}>
            <ArrowDownWideNarrow className="h-4 w-4" />
          </Button>
          <Button onClick={() => handleSortDirection('ASC')}>
            <ArrowUpWideNarrow className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  )
}
