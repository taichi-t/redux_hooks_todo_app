import React from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import TodoInput from "../todo/TodoInput";
import TodoList from "../todo/TodoList";
import Navbar from "../nav/Navbar";
import { List as HistoryList } from "../history/List";
import { List as RoutineList } from "../routine/List";

/* ---------------------------------- STYLE --------------------------------- */
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

export const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item sm={12} md={4} className={classes.box1}>
          <RoutineList />
        </Grid>

        <Grid item sm={12} md={4} className={classes.box2}>
          <TodoInput />
          <TodoList />
        </Grid>

        <Grid item sm={12} md={4} className={classes.box3}>
          <HistoryList />
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  box1: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  box2: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  box3: {
    [theme.breakpoints.down("sm")]: {
      order: 3,
    },
  },
}));
