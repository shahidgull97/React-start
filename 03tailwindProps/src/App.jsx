import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black mb-4' >This is Tailwind</h1>
      <Card username ="Alberto" btnText = "follow me"/>
      <Card username={arr} btnText = "click me"/>
    </>
  )
}

export default App
