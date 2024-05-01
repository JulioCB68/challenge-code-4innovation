import { useTheme } from '@/providers/theme-provider'
import { Moon, Rocket, Sun } from 'lucide-react'

export function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }
  return (
    <header className="border-b dark:border-zinc-700">
      <div className="flex h-16 items-center gap-6 px-6">
        <nav className="flex w-full items-center justify-between text-lg font-medium">
          <div className="flex items-center">
            <Rocket className="h-6 w-6" />
            <div className="bg-border mx-5 h-6 w-[1px] bg-zinc-300/60 dark:bg-zinc-500" />
            <h1>Desafio Técnico - 4INNOVATION</h1>
          </div>
          <button
            className="flex h-9 items-center justify-center rounded-md bg-slate-200/50 px-3 focus:outline-none dark:bg-zinc-700/40"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
