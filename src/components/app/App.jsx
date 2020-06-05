import React from "react";
import "normalize.css";
import { Provider } from "react-redux";
import { rootReducer } from "../../store/reducers/rootReducer";
import { createStore } from "redux";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Home } from "../home/Home";

/* ------------------------------- CONTEXT Provider ------------------------------ */
import { Provider as UiProvider } from "../../store/context/provider";

export const App = () => {
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

  return (
    <Provider store={store}>
      <UiProvider>
        <Home />
      </UiProvider>
    </Provider>
  );
};
