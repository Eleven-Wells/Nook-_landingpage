import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

if (!root) {
  document.body.innerHTML = '<h1 style="color:red">Root element not found</h1>'
} else {
  try {
    createRoot(root).render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    )
  } catch(e) {
    document.body.innerHTML = '<h1 style="color:red">' + e.message + '</h1>'
  }
}
  
