import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

// Ensure the Vite environment variable is available; components use it via import.meta.env
const codespace = import.meta.env.VITE_CODESPACE_NAME || 'unset'
if (codespace === 'unset') {
  // Do not spam logs in production, but useful during development.
  // eslint-disable-next-line no-console
  console.info('VITE_CODESPACE_NAME is unset — falling back to relative /api paths')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
