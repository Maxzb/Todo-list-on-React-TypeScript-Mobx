import { FC } from "react";
import { observer } from "mobx-react-lite";
import { TodoListProps } from "./types";
import List from "@mui/material/List";
import { TodoItem } from "../TodoItem";
import { useStyles } from "../TodoList/styles";

export const TodoList: FC<TodoListProps> = observer(({ todos }) => {
  const styles = useStyles();
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} index={index} styles={styles} key={todo.id} />
      ))}
    </List>
  );
});