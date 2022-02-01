import { FC } from "react";
import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";
import store from "../../store";
import { useStyles } from "../TodoList/styles";

export const ActiveTasks: FC = observer(() => {
  const styles = useStyles();

    return (
      <Typography
        className={styles.listTitle}
        mt={3}
        align="center"
        variant="h6"
        component="h2"
      >
        Незаконченных дел: {store.activeTasks}
      </Typography>
    );
});
