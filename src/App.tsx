import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello world !
      <div className='flex justify-center items-center text-red font-black'>
        tailwind installed
      </div>
    </div>
  )
}

export default App
