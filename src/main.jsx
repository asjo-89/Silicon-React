import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import './index.css'
import './contact.css'
import App from './App.jsx'
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></link>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
