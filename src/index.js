import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app/App";
import * as serviceWorker from "./serviceWorker";

import { rootReducer } from "./store/reducers/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : {
      projects: { todos: [], history: [] },
      users: {
        routine: [],
        userSettings: { color: "#2196f3", type: "light" },
      },
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

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
