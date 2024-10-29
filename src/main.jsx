import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { NvBarContextProvider } from './hooks/NavBarisOpen.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import LoginRouter from './Routers/LoginRouter.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <NvBarContextProvider>
        <Router>
          <LoginRouter />
        </Router>
      </NvBarContextProvider>
    </NextUIProvider>
  </StrictMode>,
)
