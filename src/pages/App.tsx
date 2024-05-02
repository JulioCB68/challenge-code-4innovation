import { Header } from '../components/header'
import { Table } from '../components/table/table'

import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  X,
} from 'lucide-react'

function App() {
  return (
    <div className="h-auto dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="container mx-auto w-full py-3">
        <div className="items-center gap-2 rounded-md p-4">
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
                className="placeholder:text-muted-foreground flex h-10 w-auto rounded-md border border-zinc-500 bg-transparent px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="ID do produto"
              />
              <input
                type="text"
                className="placeholder:text-muted-foreground flex h-10 w-[320px] rounded-md border border-zinc-500 bg-transparent px-3 py-2 text-sm ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nome do produto"
              />
              <button
                type="submit"
                className="bg-muted-foreground/15 hover:bg-muted-foreground/25 flex h-10 items-center rounded-md px-2.5"
              >
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
              </button>
              <button className="hover:bg-accent dark:hover:bg-accent-dark dark:bg-dark-accent flex h-10 items-center whitespace-nowrap rounded-md border px-2.5">
                <X className="mr-2 h-4 w-4" />
                Remover filtros
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="hover:bg-accent dark:hover:bg-accent-dark dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border p-2">
                <ArrowDownWideNarrow className="h-4 w-4" />
              </button>
              <button className="items hover:bg-accent dark:hover:bg-accent-dark dark:bg-dark-accent flex h-10 w-10 justify-center rounded-md border p-2">
                <ArrowUpWideNarrow className="h-4 w-4" />
              </button>
            </div>
          </div>
          <Table />
          <div className="flex items-center justify-between pt-4">
            <span className="text-muted-foreground text-sm">
              Total de 10 item(s)
            </span>
            <div className="flex items-center gap-2">
              <button className="hover:bg-accent dark:hover:bg-accent-dark dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Página anterior</span>
              </button>
              <button className="hover:bg-accent bg-dark-accent dark:hover:bg-accent-dark dark:bg-dark-accent flex h-10 w-10 items-center justify-center rounded-md border">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Próxima página</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
