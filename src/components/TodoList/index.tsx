import { FC } from "react";
import { Observer, observer } from "mobx-react-lite";
import { TodoListProps } from "./types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./styles";
import store from "../../store";

export const TodoList: FC<TodoListProps> = observer(({ todos }) => {
  const styles = useStyles();

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo, index) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        const classes = [styles.todo];
        if (todo.completed) {
          classes.push(styles.completed);
        }

        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => store.removeTask(todo.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              onClick={() => store.toggleHandler(todo.id)}
              role={undefined}
              dense
              divider
            >
              <ListItemText
                className={classes.join(" ")}
                id={labelId}
                primary={index + 1 + `. ${todo.title}`}
              />
              <ListItemIcon>
                <Checkbox
                  checked={todo.completed}
                  edge="end"
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
});
