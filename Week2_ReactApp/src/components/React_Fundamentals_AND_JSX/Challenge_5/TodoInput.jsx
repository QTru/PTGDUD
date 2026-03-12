import React from 'react'
import styles from './TodoInput.module.css'
import TodoList from './TodoList.jsx'

function TodoInput({todos, setTodos}) {
  const openTodos = () => {
    setTodos({...todos, isOpen: true})
  }

  return (
    <div className={styles.input}>
        <button type="button" style={{display: !todos.isOpen? 'block' : 'none'}} onClick={openTodos}>Open Todo List</button>
        <TodoList todos={todos} setTodos={x => setTodos(x)}></TodoList>
    </div>
  )
}

export default TodoInput