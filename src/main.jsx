import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Calculator from './calculator.jsx'
import Todo from './todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Calculator />
    <Todo />
  </StrictMode>,
)
