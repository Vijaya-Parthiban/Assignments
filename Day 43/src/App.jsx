import { useState } from 'react'
import './App.css'
import Task1counter from './Task1counter'
import Task2 from './Task2'
import Task3toggler from './Task3toggler'
import Task4 from './Task4'
import Task5 from './Task5'

function App() {
    const [count, setCount] = useState(0)
  return (
    <>
       <Task1counter/>
      <Task2/>
      <Task3toggler/>
      <Task4/>
      <Task5/>
  
    </>
  )
}

export default App
