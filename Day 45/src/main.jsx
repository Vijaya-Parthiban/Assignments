import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1 from './Task1.jsx'
import Task2 from './Task2.jsx'
import Task3 from './Task3.jsx'
import Task4 from '../../Day 44/src/Task4.jsx'
import Task5 from './Task5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task1/>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>

  </StrictMode>,
)
