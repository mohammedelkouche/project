import React from 'react'
import Todo from './Todo'

function TodoList({todos , setTodos , setEditTodo  ,setEditingText , editingText , editTodo}) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {
                todos.map(todo => (
                    <Todo   key = {todo.id}
                            text = {todo.text}
                            todos = {todos} 
                            todo = {todo}
                            setTodos = {setTodos}
                            setEditTodo = {setEditTodo}
                            setEditingText = {setEditingText}
                            editingText = {editingText}
                            editTodo = {editTodo}/>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList ;