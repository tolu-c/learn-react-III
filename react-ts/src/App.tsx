import NewTodo from "./components/NewTodo";
import Persons from "./components/Persons";
import TodoList from "./components/TodoList";
import Person from "./models/person";
import { TodoContextProvider } from "./store/todos-context";

export default function App() {
  const persons = [new Person("John Doe", 30), new Person("Jane Doe", 25)];

  return (
    <div>
      <TodoContextProvider>
        <NewTodo />
        <TodoList />
      </TodoContextProvider>
      <br />
      <hr />
      <br />
      <Persons info={persons} />
    </div>
  );
}
