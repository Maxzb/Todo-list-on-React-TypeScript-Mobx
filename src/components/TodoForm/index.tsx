import React, { ChangeEvent, FC } from "react";
import { observer } from "mobx-react-lite";
import TextField from "@mui/material/TextField";
import { useStyles } from "./styles";
import { Button } from "@mui/material";
import store from "../../store";

export const TodoForm: FC = observer(() => {
  const styles = useStyles();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    store.setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      store.addTodo(store.title);
    }
  };

  const buttonPressHandler = () => {
    store.addTodo(store.title);
  };

  return (
    <div className={styles.todoform}>
      <TextField
        onChange={changeHandler}
        onKeyDown={keyPressHandler}
        value={store.title}
        id="title"
        className={styles.inputTitle}
        label="Введите название дела"
        variant="outlined"
        fullWidth
      />
      <Button
        className={styles.button}
        variant="contained"
        color="success"
        onClick={buttonPressHandler}
      >
        Добавить дело
      </Button>
    </div>
  );
});
