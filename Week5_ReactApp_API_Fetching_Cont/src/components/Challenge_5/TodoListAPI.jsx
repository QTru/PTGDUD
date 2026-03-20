import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./TodoListAPI.module.css";
import TodoAPI from "./TodoAPI";

function TodoListAPI() {
  const [listToggle, setListToggle] = useState(false);
  const [todoFormToggle, setTodoFormToggle] = useState(false);
  const [todos, setTodos] = useState([]);
  const newTodo = useRef({});
  const todoForm = useRef(null);
  const [todoDeleteList, setTodoDeleteList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://69831ab79c3efeb892a46ab7.mockapi.io/api/test/todos";

  function openList() {
    setListToggle(true);
  }

  function closeList() {
    setListToggle(false);
  }

  function openTodoForm() {
    setTodoFormToggle(true);
  }

  function closeTodoForm() {
    setTodoFormToggle(false);
  }

  function updateNewTodo(key, value) {
    newTodo.current = { ...newTodo.current, [key]: value };
  }

  const updateTodoDeleteList = useCallback((id, checked) => {
    setTodoDeleteList((prev) =>
      checked
        ? prev.includes(id)
          ? prev
          : [...prev, id]
        : prev.filter((todoId) => todoId !== id),
    );
  }, []);

  useEffect(() => {
    console.log(todoDeleteList);
  }, [todoDeleteList]);

  async function getTodos() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();

      setTodos(data);
    } catch (fetchedError) {
      setError(fetchedError.message);
    } finally {
      setLoading(false);
    }
  }

  async function addTodo() {
    setError(null);

    if (newTodo.current.title == null || newTodo.current.title.length === 0) {
      alert("New todo title is empty");
      return;
    }

    if (
      newTodo.current.content == null ||
      newTodo.current.content.length === 0
    ) {
      alert("New todo content is empty");
      return;
    }

    try {
      (async () => {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo.current),
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();

        alert(`Successfully added todo: ${JSON.stringify(data)}`);
        newTodo.current = {};
        todoForm.current.reset();
        closeTodoForm();
        await getTodos();
      })();
    } catch (fetchedError) {
      setError(fetchedError);
    }
  }

  async function deleteSelectedTodos() {
    setError(null);

    if (todoDeleteList.length === 0) {
      alert("No selected todo");
      return;
    }

    try {
      for (const id of todoDeleteList) {
        const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      }

      setTodoDeleteList([]);
      await getTodos();
    } catch (fetchedError) {
      setError(fetchedError.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={styles.container}>
      <button type="button" onClick={openList}>
        Open list
      </button>

      <div className={listToggle ? styles.openList : styles.closeList}>
        <div className={styles.exitButtonContainer}>
          <button type="button" onClick={closeList}>
            X
          </button>
        </div>

        <div className={styles.todoListContainer}>
          {isLoading ? (
            <p>Loading</p>
          ) : error != null ? (
            <p>{error}</p>
          ) : (
            todos.map((todo) => (
              <TodoAPI
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                updateTodoDeleteList={updateTodoDeleteList}
              />
            ))
          )}
        </div>

        <div className={styles.listButtonsContainer}>
          <button type="button" onClick={openTodoForm}>
            Add Todo
          </button>
          <button type="button" onClick={getTodos}>
            Get Todos
          </button>
          <button type="button" onClick={deleteSelectedTodos}>
            Delete Selected Todos
          </button>
        </div>
      </div>

      <form
        ref={todoForm}
        action="addTodo"
        className={todoFormToggle ? styles.openTodoForm : styles.closeTodoForm}
      >
        <h1>Add Todo Form</h1>

        <div className={styles.todoFormInputContent}>
          <label>
            Title:{" "}
            <input
              type="text"
              name="title"
              placeholder="Write todo title..."
              onChange={(event) =>
                updateNewTodo(event.target.name, event.target.value)
              }
            />
          </label>
          <label>
            Content:{" "}
            <input
              type="text"
              name="content"
              placeholder="Write todo content..."
              onChange={(event) =>
                updateNewTodo(event.target.name, event.target.value)
              }
            />
          </label>
        </div>

        <div className={styles.todoFormButtons}>
          <button type="button" onClick={addTodo}>
            Add Todo
          </button>
          <button type="button" onClick={closeTodoForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoListAPI;
