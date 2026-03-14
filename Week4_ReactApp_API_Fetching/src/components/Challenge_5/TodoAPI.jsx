import React, { memo } from "react";
import styles from "./TodoAPI.module.css";

const TodoAPI = memo(({ id, title, content, updateTodoDeleteList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          name=""
          id={id}
          onChange={(event) =>
            updateTodoDeleteList(event.target.id, event.target.checked)
          }
        />
      </div>
      <div className={styles.textContainer}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
});

export default TodoAPI;
