import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ToDoApp from './ToDoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ToDoApp />
    </div>
  )
}

export default App
