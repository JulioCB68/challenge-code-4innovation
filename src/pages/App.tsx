import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from 'lucide-react'
import { Header } from '../components/header'
import { Table } from '../components/table/table'

function App() {
  return (
    <div className="h-screen dark:bg-zinc-900 dark:text-white">
      <Header />
      <div className="container mx-auto w-full py-3">
        <div className="items-center gap-2 rounded-md p-4">
          <h1 className="pb-6 text-2xl font-semibold">Dados diários</h1>
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Filtros:</span>
              <input
                type="text"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-8 w-auto rounded-md border px-3 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="ID do produto"
              />
              <input
                type="text"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-8 w-auto rounded-md border px-3 py-1 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Nome do produto"
              />
              <button
                type="submit"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex items-center rounded-md px-3 py-1"
              >
                <Search className="mr-2 h-4 w-4" />
                Filtrar resultados
              </button>
              <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center rounded-md border px-3 py-1">
                <X className="mr-2 h-4 w-4" />
                Remover resultados
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center rounded-md border p-2 text-center">
                <ArrowDownWideNarrow className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center rounded-md border p-2 text-center">
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
              <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-md border p-0">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Página anterior</span>
              </button>
              <button className="border-input bg-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-md border p-0">
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
