import { useState } from 'react'
import Cards from './Components/Cards'
import Contador from './Components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Cards count={count}/>
      <p>Contador: {count}</p>
      <Contador setCount={setCount} count={count}/>
      </div>
    </>
  )
}

export default App
