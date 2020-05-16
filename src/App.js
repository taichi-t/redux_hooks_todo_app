import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/reducer";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle bgc={theme.palette.background.default} />
        <Navbar />
        <TodoInput />
        <TodoList />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
