import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (title: string) => void }> = ({
  onAddTodo,
}) => {
  const titleRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleRef.current!.value;

    if (enteredTitle.trim().length === 0) {
      return;
    }
    onAddTodo(enteredTitle);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={titleRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
