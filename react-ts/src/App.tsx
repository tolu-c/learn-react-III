import Persons from "./components/Persons";
import TodoList from "./components/TodoList";
import Person from "./models/person";
import Todo from "./models/todo";

export default function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];
  const persons = [new Person("John Doe", 30), new Person("Jane Doe", 25)];

  return (
    <div>
      <TodoList items={todos} />
      <br />
      <hr />
      <br />
      <Persons info={persons} />
    </div>
  );
}

