import React, { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";
import { useStyles } from "./styles";
import { TodoFormProps } from "./types";

export const TodoForm: FC<TodoFormProps> = (props) => {
  const styles = useStyles();
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <TextField
      onChange={changeHandler}
      onKeyUp={keyPressHandler}
      value={title}
      id="title"
      className={styles.inputTitle}
      label="Введите название дела"
      variant="outlined"
      fullWidth
    />
  );
};