import { useState } from 'react'
// import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-full duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap w-full justify-center bottom-20
        '>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl'>

          <button
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>Red</button>
          <button
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>Blue</button>
          <button
          onClick={()=>setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"olive"}}>olive</button>
          <button
          onClick={()=>setColor("grey")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"grey"}}>Grey</button>
          <button
          onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button
          onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
          <button
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}>Pink</button>
          <button
          onClick={()=>setColor("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"purple"}}>Purple</button>
          <button
          onClick={()=>setColor("lavender")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"lavender"}}>Lavender</button>
          <button
          onClick={()=>setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{backgroundColor:"white"}}>White</button>
          <button
          onClick={()=>setColor("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}>Black</button>
        </div>
        
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quae temporibus quos, vero a qui sed veritatis necessitatibus, quidem accusamus saepe enim facilis distinctio esse deserunt ad vitae. Et, beatae?</p>
    </div>
    
    
  )
}

export default App
