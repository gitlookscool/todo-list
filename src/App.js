import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';
import './app.css'
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const LOCAL_STORAGE_KEY = 'todos.todoapp'

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=> todo.id===id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) return setTodos(storedTodos)
  },[])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
  },[todos])

  function handleRemoveTodo(){
    const newTodos = todos.filter(todo => todo=!todo.complete)
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    if (name === '') return

    setTodos(prevTodos => {
      return [...prevTodos,{id: uuidv4(), name:name, complete: false}]
    })
    
    todoNameRef.current.value = null;
  }

  return (
    <div className='todo-list'>
      <p>Testing Git commit</p>
      <h1>Todo List</h1>
      <input 
      ref={todoNameRef}
      type='text'
      placeholder='add todo'
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleRemoveTodo}>Remove Todo</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App;
