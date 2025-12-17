import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1Student from './Task1Student.jsx'
import Task2Props from './Task2Props.jsx'
import Task3Message from './Task3Message.jsx'
import Task4button from './Task4button.jsx'
import Task5card from './Task5card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task1Student/>
    <Task2Props Name="Vijaya Parthiban" Age={22}/>
    <Task2Props Name="sangavi" Age="22"/>
    <Task3Message Message="iam vijaya from chennai"/>
    <Task4button button="click me"/>
    <Task5card Name="vijaya" Roll_number={22}/>
    <br />
    <Task5card Name="rihaan" Roll_number={23}/>
  </StrictMode>
)
