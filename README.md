## Hooks in React.

- The Functions that start with use are called hooks.
- Hooks in react are fuctions that allow you to `hook into` React State and LifeCycle features from function components.

useEffect is a hook in React that allows you to perform side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM. It resembles componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods combined in class components.

You pass a function to useEffect as its first argument. This function will be executed after the component has rendered to the screen.

By default, useEffect runs after every render, but you can specify dependencies as the second argument to control when it runs. If the dependencies change between renders, the effect will run again.

If you want the effect to only run once after the initial render, you can pass an empty array ([]) as the second argument.

useEffect can also return a cleanup function, which will be executed when the component unmounts or when the dependencies change and the effect re-runs.

It's important to manage side effects with useEffect to prevent memory leaks and ensure your component behaves as expected across different rendering cycles.


        import { useEffect, useState } from 'react'
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        import './App.css'

        function App() {
        const [todos, setTodos] = useState([])

        const interval = 2000;
        
        useEffect(()=>{
            setInterval(() => {
            fetch("https://sum-server.100xdevs.com/todos")
            .then(async function(res){
                const json = await res.json();
                setTodos(json.todos);
            })
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
