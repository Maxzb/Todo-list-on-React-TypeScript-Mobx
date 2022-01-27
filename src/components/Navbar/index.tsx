import React, { FC } from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./styles";

export const Navbar: FC = () => {
  const styles = useStyles();

  return (
    <Typography
      className={styles.header}
      align="center"
      mt={1}
      variant="h5"
      component="h1"
    >
      React + Typescript + MobX
      <Typography className={styles.subtitle} variant="h4" component="span">
        Todo List
      </Typography>
    </Typography>
  );
};
