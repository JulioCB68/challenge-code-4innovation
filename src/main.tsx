import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import TanstackProvider from './providers/tanstack-query-provider'
import { ThemeProvider } from './providers/theme-provider'

import App from './pages/App'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanstackProvider>
      <BrowserRouter>
        <ThemeProvider key="challenge-code-theme" defaultTheme="system">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </TanstackProvider>
  </React.StrictMode>,
)
