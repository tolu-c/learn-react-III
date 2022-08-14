import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Persons from "./components/Persons";
import TodoList from "./components/TodoList";
import Person from "./models/person";
import Todo from "./models/todo";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const persons = [new Person("John Doe", 30), new Person("Jane Doe", 25)];

  const addTodo = (title: string) => {
    const newTodo = new Todo(title);
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };
  const removeTodo = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} onRemoveTodo={removeTodo} />
      <br />
      <hr />
      <br />
      <Persons info={persons} />
    </div>
  );
}
