import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => 
                  setCount((count) => count + 1,
                  console.log("increase 가 클릭됨")
                  )}>+1</button>
      <button onClick={() => 
                  setCount((count) => count - 1,
                  console.log("decrease 가 클릭됨")
                  )}>-1</button>
    </>
  )
}

export default App
