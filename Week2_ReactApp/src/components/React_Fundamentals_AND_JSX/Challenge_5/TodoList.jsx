import React from 'react'
import './TodoList.css'
import TodoItem from './TodoItem.jsx'

function TodoList({todos, setTodos}) {
  const closeTodos = () => {
    setTodos({...todos, isOpen: false});
  };

  const addTodos = () => {
    setTodos({...todos,
      todoList: [...todos.todoList,
        {id: (todos.todoList.length == 0? 0 : todos.todoList[todos.todoList.length - 1].id + 1), deletionSelection: false, content: ''}
      ]
    });
  };

  const deleteTodos = () => {
    setTodos({...todos,
      todoList: todos.todoList.filter(todo => !todo.deletionSelection)
    });
  };

  const hasSelectedTodos = todos.todoList.some(todo => todo.deletionSelection);
  console.log(hasSelectedTodos);

  return (
    <div className='list-window' style={{display: todos.isOpen? 'flex' : 'none'}}>
      <button type="button" onClick={closeTodos}>X</button>
      <div className='todo-container'>
        <ul>
          {todos.todoList.map(todo => <TodoItem key={todo.id} id={todo.id} todos={todos} setTodos={x => setTodos(x)}></TodoItem>)}
        </ul>
      </div>
      <div className='action-buttons'>
        <button type="button" className='add-todo' onClick={addTodos}>Add Todo</button>
        <button type="button" className='delete-todo' disabled={!hasSelectedTodos} onClick={deleteTodos}>Delete Todo</button>
      </div>
    </div>
  )
}

export default TodoList