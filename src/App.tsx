import React, { FC, useState } from "react";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const toggleRemove = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <Container maxWidth="md">
      <Navbar />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={toggleRemove}
      />
    </Container>
  );
};

export default App;