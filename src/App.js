import React from "react";
import "normalize.css";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers/rootReducer";
import { createStore } from "redux";

//components
import TodoInput from "./components/todo/TodoInput";
import TodoList from "./components/todo/TodoList";
import Navbar from "./components/nav/Navbar";
import HistoryList from "./components/history/HistoryList";
import RoutineList from "./components/routine/RoutineList";
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
    : {
        projects: { todos: [], history: [] },
        users: { routine: [], userSettings: {} },
      };
  const persistedState = data;

  const store = createStore(
    rootReducer,
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
    </Provider>
  );
}

export default App;
