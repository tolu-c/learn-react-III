

const NewTodo = () => {
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const todoText = (event.target as HTMLFormElement).elements.todoText.value;
    // if (todoText) {
    //   dispatch(addTodo(todoText));
    // }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
