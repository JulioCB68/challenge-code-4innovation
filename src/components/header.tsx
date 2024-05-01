import { Rocket } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b dark:border-zinc-700">
      <div className="flex h-16 items-center gap-6 px-6">
        <nav className="flex items-center gap-6 text-lg font-medium">
          <Rocket className="h-6 w-6" />
          <div className="bg-border h-6 w-[1px] shrink-0 bg-zinc-300/60 dark:bg-zinc-500" />
          <h1>Desafio Técnico - 4INNOVATION</h1>
        </nav>
      </div>
    </header>
  )
}
