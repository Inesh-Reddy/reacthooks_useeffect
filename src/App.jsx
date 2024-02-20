import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const interval = 2000;
  
  useEffect(()=>{
    console.log("fetching data")
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          setTodos(res.data.todos);
        })
      // fetch("https://sum-server.100xdevs.com/todos")
      //   .then(async function(res){
      //     const json = await res.json();
      //     setTodos(json.todos);
      //   })
    }, interval); 
  }, [])

  return (
    <div>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h1>
      {description}
    </h1>
  </div>

}

export default App
