import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo}) {

    
    return (
        todos.map(x=>{
            return <Todo key={x.id} todo={x} toggleTodo={toggleTodo}/>
        })
  )
}
