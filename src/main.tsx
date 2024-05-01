import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './styles/global.css'
import { ThemeProvider } from './providers/theme-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider key="challenge-code-theme" defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
