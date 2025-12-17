import { useState } from 'react'
import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'
import './App.css'
import Task1_loggedin from './Task1loginid'
import Task2PremiumButton from './Task2premiumbutton'
import Task3Map from './Task3map'
import Task4 from './Task4'
import Task5 from './Task5'
import Task6todolist from './Task6todolist'
import Task8 from './Task8'

function App() {
  const [Count, SetCount] = useState(0)

  return (
    <>
      <Task1_loggedin/>
      <Task2PremiumButton/>
      <Task3Map/>
      <Task4/>
      <Task5/>
      <Task6todolist/>
      <Task8/>
    </>
  )
}

export default App
