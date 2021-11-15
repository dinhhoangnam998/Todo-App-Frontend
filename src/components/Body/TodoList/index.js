import { ListGroup } from "reactstrap";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, updateState, addTodo, removeTodo }) {
  return (
    <div>
      <ListGroup>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} index={index} {...{ updateState, addTodo, removeTodo }} />
        ))}
      </ListGroup>
    </div>
  );
}
