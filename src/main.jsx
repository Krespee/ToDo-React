import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskList } from './components/TaskList.jsx'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskList/>
  </React.StrictMode>,
)
