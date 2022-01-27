import React, { FC } from "react";
import { TodoListProps } from "./types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./styles";

export const TodoList: FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const styles = useStyles();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Typography
        className={styles.listTitle}
        mt={3}
        align="center"
        variant="h6"
        component="h2"
      >
        Список дел
      </Typography>

      {todos.map((todo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        const classes = [styles.todo];
        if (todo.completed) {
          classes.push(styles.completed);
        }

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => onRemove(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={onToggle.bind(null, todo.id)}
              dense
              divider
            >
              <ListItemText
                className={classes.join(" ")}
                id={labelId}
                primary={todo.title}
              />
              <ListItemIcon>
                <Checkbox
                  edge="end"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
