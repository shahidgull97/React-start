
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'
import { useSelector } from 'react-redux'


function App() {

  return (
    <>
    <h1>Learn about Redux</h1>
    <AddTodo />
      <Todos />
      </>
  )
}

export default App
