import { useState } from "react";
import { ListGroupItem } from "reactstrap";
import clsx from "clsx";
import styles from "./todo-item.module.css";

export default function TodoItem({ todo, index, updateState, addTodo, removeTodo }) {
  return (
    <ListGroupItem>
      <div className="d-flex justify-content-between">
        <div>
          <input
            class="form-check-input me-1"
            type="checkbox"
            checked={todo.isDone}
            onChange={(e) => {
              updateState(index, e.target.checked);
            }}
          />
          <span style={{ marginLeft: 8 }} className={clsx({ [styles.done]: todo.isDone })}>
            {todo.content}
          </span>
        </div>
        <button className="btn-close" onClick={() => removeTodo(index)}></button>
      </div>
    </ListGroupItem>
  );
}
