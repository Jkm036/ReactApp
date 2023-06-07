import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Message from './Message'
import ListGroup from './components/ListGroup'

function App() {
  const [count, setCount] = useState(0)

  return (
   <p><ListGroup/></p>
  )
}

export default App
