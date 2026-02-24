import React from 'react'
import './TodoItem.css'

function TodoItem({id, todos, setTodos}) {
  const updateTodos = (e) => {
    setTodos({
      ...todos, todoList: todos.todoList.map(todo => {
        let element = e.target;

        if (todo.id === parseInt(element.id))
          return element.type === 'checkbox'? {...todo, deletionSelection: element.checked} : {...todo, content: element.value};
        else
          return todo;
      })
    });
  };

  return (
    <li className='item' id={id}>
      <input type="checkbox" name="" id={id} onChange={updateTodos} />
      <input type="text" name="" id={id} placeholder='Enter todos...' onChange={updateTodos} />
    </li>
  )
}

export default TodoItem