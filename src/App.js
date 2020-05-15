import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/reducer";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Navbar />
      <TodoInput />
      <TodoList />
    </Provider>
  );
}

export default App;
