import React, { FC, useState } from "react";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const App: FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log("Add New Todo:", title);
  };

  return (
    <Container maxWidth="md">
      <Navbar />
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos}/>
    </Container>
  );
};

export default App;
