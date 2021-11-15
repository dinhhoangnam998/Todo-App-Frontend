import axios from "axios";
import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Body({ props }) {
  const sampleTodos = [
    // { id: 1, content: "task1", isDone: true },
    // { id: 2, content: "task2", isDone: false },
  ];

  const [todos, setTodos] = useState(sampleTodos);

  useEffect(() => {
    initFetch();
  }, []);

  async function initFetch() {
    const response = await axios.get("/todos");
    setTodos(response.data.todos);
  }

  async function updateState(index, checked) {
    const clone = [...todos];
    clone[index].isDone = checked;
    setTodos(clone);
  }
  async function addTodo(content) {
    const newTodo = {
      id: Date.now(),
      content,
      isDone: false,
    };
    await axios.post("/todos", newTodo);
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  }

  async function removeTodo(index) {
    await axios.delete("/todos/" + todos[index].id);
    const newTodos = todos.filter((item, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <Form addTodo={addTodo} />

      <div style={{ paddingTop: 16 }}></div>

      <TodoList {...{ todos, updateState, addTodo, removeTodo }} />

      <div style={{ paddingTop: 16 }}></div>

      <FilterBar count={todos.length} />
    </div>
  );
}
