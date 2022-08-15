import { useContext } from "react";
import { TodoContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const { items, removeTodo } = todoCtx;

  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
