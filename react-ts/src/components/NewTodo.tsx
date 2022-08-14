import { useRef } from "react";


const NewTodo = () => {
  const titleRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleRef.current!.value
    
    if (enteredTitle.trim().length === 0) {
      return
    }
      
    }
    // const todoText = (event.target as HTMLFormElement).elements.todoText.value;
    // if (todoText) {
    //   dispatch(addTodo(todoText));
    // }
  // };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" ref={titleRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
