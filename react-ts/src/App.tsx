import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Persons from "./components/Persons";
import TodoList from "./components/TodoList";
import Person from "./models/person";
import Todo from "./models/todo";

export default function App() {
  const [todos, setTodos] = useState([])
  const persons = [new Person("John Doe", 30), new Person("Jane Doe", 25)];

  const addTodo = (title: string) => {
   setTodos(new Todo(title));
  }


  return (
    <div>
      <NewTodo onAddTodo={addTodo} />
      <TodoList items={todos} />
      <br />
      <hr />
      <br />
      <Persons info={persons} />
    </div>
  );
}

