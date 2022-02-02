import { FC } from "react";
import { Observer, observer } from "mobx-react-lite";
import { Typography } from "@mui/material";
import { useStyles } from "../TodoList/styles";
import store from "../../store";
import { TodoList } from "../TodoList";

export const TodoView: FC = observer(() => {
  const styles = useStyles();

  if (!store.todos.length) {
    return (
      <Typography
        className={styles.listTitle}
        mt={3}
        align="center"
        variant="h6"
        component="h2"
      >
        Пока дел нет!
      </Typography>
    );
  }

  return (
    <>
      <Typography
        className={styles.listTitle}
        mt={3}
        align="center"
        variant="h6"
        component="h2"
      >
        Список дел
      </Typography>
      <TodoList todos={store.todos} />
    </>
  );
});
