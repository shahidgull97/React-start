import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(10)
  // let count = 5
  const addvalue = ()=>{
    if (count <= 19){
      count = count + 1
      setCount(count)
      console.log("count is "+ count)
    }
    else{
      console.log("Counter has reached to maximum")
    }
    
  }
  const RemoveValue = ()=>{
    if (count>0){
      count = count - 1
      setCount(count)
      console.log("count is "+ count)
    }
    else{
      console.log("Counter has reached to minimum")
    }
    
  }


  return (
    <>
      <h1>This is a counter</h1>
      <h2>Count is {count} </h2>
      <button
      onClick={addvalue}
      >Add Value {count}</button>
      <br></br>
      <button
      onClick={RemoveValue}
      >Remove Value {count}</button>
    </>
  )
}

export default App
