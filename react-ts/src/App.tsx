import TodoList from "./components/TodoList";
import Todo from "./models/todo";

export default function App() {
  const todos = [new Todo("learn react"), new Todo("learn typescript")];

  return (
    <div>
      <TodoList items={todos} />
    </div>
  );
}
