import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div>
      <TodoList items={["Learn React", "Learn Typescript"]} />
    </div>
  );
}
