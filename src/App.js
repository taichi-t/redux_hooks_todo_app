import React from "react";
import { Provider } from "react-redux";
import projectReducer from "./store/reducers/projectReducer";
import { createStore } from "redux";

//components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

//style
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

//hooks
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, toggleDarkMode] = useDarkMode();
  const persistedState = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : { todos: [] };

  const store = createStore(
    projectReducer,
    persistedState,
    window.devToolsExtension && window.devToolsExtension()
  );

  store.subscribe(() => {
    localStorage.setItem("todos", JSON.stringify(store.getState()));
  });

  const themeConfig = createMuiTheme(theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeConfig}>
        <GlobalStyle theme={themeConfig} />
        <Navbar toggleDarkMode={toggleDarkMode} />
        <TodoInput />
        <TodoList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
