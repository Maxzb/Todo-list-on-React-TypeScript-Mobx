import { FC } from "react";
import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { observer } from "mobx-react-lite";
import store from "./store";
import { ActiveTasks } from "./components/ActiveTasks";
import { TodoView } from "./components/TodoView";

export const App: FC = observer(() => {
  return (
    <Container maxWidth="md">
      <Header />
      <TodoForm />
      <TodoView />
      <ActiveTasks />
    </Container>
  );
});
