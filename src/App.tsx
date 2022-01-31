import React, { FC, useEffect } from "react";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { observer } from "mobx-react-lite";
import store from "./store";
import { ITodo } from "./interfaces";

const App: FC = () => {

  useEffect(() => {
    store.todos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
  }, []);

  /* useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(store.todos)
    );
  }, [store.todos]); */

  return (
    <Container maxWidth="md">
      <Navbar />
      <TodoForm />
      <TodoList todos={store.todos} />
    </Container>
  );
};

export default observer(App);
