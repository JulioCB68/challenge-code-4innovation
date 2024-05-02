import { useSearchParams } from 'react-router-dom'

import Button from './form/button'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface IPaginaitonPorps {
  pageIndex: number
  totalCount: number
}

export default function Pagination({
  pageIndex,
  totalCount,
}: IPaginaitonPorps) {
  const [, setSearchParams] = useSearchParams()

  function handlePaginate(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  const totalCountPages = Math.ceil(totalCount / 10)

  return (
    <div className="flex items-center justify-between gap-6 pt-4">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center justify-between gap-2">
        {totalCount && (
          <p className="mr-2 text-sm font-medium">
            Página {pageIndex + 1} de {totalCountPages}
          </p>
        )}
        <Button
          onClick={() => handlePaginate(pageIndex - 1)}
          disabled={pageIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button
          onClick={() => handlePaginate(pageIndex + 1)}
          disabled={pageIndex + 1 === totalCountPages}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
      </div>
    </div>
  )
}
