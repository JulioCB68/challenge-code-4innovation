import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import TanstackProvider from './providers/tanstack-query-provider'
import { ThemeProvider } from './providers/theme-provider'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanstackProvider>
      <ThemeProvider key="challenge-code-theme" defaultTheme="system">
        <App />
      </ThemeProvider>
    </TanstackProvider>
  </React.StrictMode>,
)
