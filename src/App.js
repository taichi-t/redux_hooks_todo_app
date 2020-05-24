import React from "react";
import "normalize.css";
import { Provider } from "react-redux";
import projectReducer from "./store/reducers/projectReducer";
import { createStore } from "redux";

//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import HistoryList from "./components/HistoryList";
import RoutineWork from "./components/RoutineWork";
//style
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//hooks
import { useTheme } from "./hooks/useTheme";

function App() {
  const [theme, toggleTheme] = useTheme();
  const data = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : { todos: [], history: [] };
  const persistedState = data;

  const store = createStore(
    projectReducer,
    persistedState,
    window.devToolsExtension && window.devToolsExtension()
  );

  store.subscribe(() => {
    localStorage.setItem("data", JSON.stringify(store.getState()));
  });

  const themeConfig = createMuiTheme(theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyle theme={themeConfig} />
        <Navbar toggleTheme={toggleTheme} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <RoutineWork />
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
    </Provider>
  );
}

export default App;
