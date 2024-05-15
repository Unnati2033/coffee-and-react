import { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
