import { useState,useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[password,setPassword]= useState()
  const[length,setLength] = useState(8)
  const[character,setCharacter] = useState(false)
  const[numberall, setNumber] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberall) str += "0123456789"
    if(character) str += "!@#$%^&*(){}<>"
    for( let i=1; i<=length; i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char) 

    }
    setPassword(pass)

  }
    ,[numberall,length,character,setPassword])

  
  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    
  },[password])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberall,character,setPassword])



  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-3xl px-4 my-8   '
    style={{backgroundColor:'lavender'}}>
      <h1 className=' text-black text-center my-3 py-3'>Password Generator</h1>
      <div className='flex  rounded-lg overflow-hidden shadow mb-4'
      >
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
          onClick={()=>copyToClipboard()}
          className='outline-none px-4 py-1 rounded-lg text-white shadow-lg shrink-0 bg-blue-700 active:bg-green-700 transition transform  active:scale-110 active:shadow-lg focus:outline-none'
          >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 py-5'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min = {6}
          max ={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label> Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberall}
          id='numberInput'
          onChange={()=>{
            setNumber((prev)=> !prev)
          }}
          />
          <label htmlFor='numberInput'> Numbers: </label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={character}
          id='characterInput'
          onChange={()=>{
            setCharacter((prev)=> !prev)
          }}
          />
          <label htmlFor='charInput'> Character: </label>
        </div>

      </div>
    
    </div>
      
    </>
  )
}

export default App
