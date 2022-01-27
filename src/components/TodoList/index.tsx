import React, { FC, useState } from "react";
import { TodoListProps } from "./types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList: FC<TodoListProps> = (todos) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <ListItem
            secondaryAction={
              <IconButton edge="end">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          ></ListItem>
        );
      })}
    </List>
  );
};
