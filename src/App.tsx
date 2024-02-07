//import Message from './Message'
import './App.css'
//import ListGroup from './components/ListGroup'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count+1)}
  >
    {count}
    
    </button>
}

export default App