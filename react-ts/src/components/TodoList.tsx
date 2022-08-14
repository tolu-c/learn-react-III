import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{ items: Todo[] }> = ({items}) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} title={item.title} />
      ))}
    </ul>
  );
};

export default TodoList;
