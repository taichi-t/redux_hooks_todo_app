import React from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import TodoInput from "../todo/TodoInput";
import TodoList from "../todo/TodoList";
import Navbar from "../nav/Navbar";
import { List as HistoryList } from "../history/List";
import { List as RoutineList } from "../routine/List";

/* ---------------------------------- STYLE --------------------------------- */
import Grid from "@material-ui/core/Grid";
import { GlobalStyle } from "../../GlobalStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

/* ---------------------------------- HOOKS --------------------------------- */
import { useTheme } from "../../hooks/useTheme";

export const Home = () => {
  const [theme] = useTheme();
  const themeConfig = createMuiTheme(theme);

  return (
    <>
      <GlobalStyle theme={themeConfig} />
      <ThemeProvider theme={themeConfig}>
        <Navbar />
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <RoutineList />
          </Grid>
          <Grid item xs={12} md={4}>
            <TodoInput />
            <TodoList />
          </Grid>
          <Grid item xs={12} md={4}>
            <HistoryList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};
