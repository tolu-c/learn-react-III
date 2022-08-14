import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{ items: Todo[] }> = ({items}) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default TodoList;
