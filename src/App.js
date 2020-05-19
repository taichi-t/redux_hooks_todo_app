import React from "react";
import { Provider } from "react-redux";
import projectReducer from "./store/reducers/projectReducer";
import { createStore } from "redux";

//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import History from "./components/History";
//style
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

//hooks
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, toggleDarkMode] = useDarkMode();
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
        <Navbar toggleDarkMode={toggleDarkMode} />
        <TodoInput />
        <TodoList />
        <History />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
