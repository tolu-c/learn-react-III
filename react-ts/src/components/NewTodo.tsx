import { useContext, useRef } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const { addTodo } = todoCtx;
  
  const titleRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleRef.current!.value;

    if (enteredTitle.trim().length === 0) {
      return;
    }
    addTodo(enteredTitle);
  };

  return (
    <form onSubmit={todoSubmitHandler} className={classes.form}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={titleRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
