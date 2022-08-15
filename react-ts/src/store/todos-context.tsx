import React, { createContext, useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (todoId: string) => {},
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo = new Todo(title);
    setTodos((prevTodo) => [...prevTodo, newTodo]);
  };
  const removeTodo = (todoId: string) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== todoId));
  };
  const todoContextValue: TodoContextType = {
    items: todos,
    addTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
