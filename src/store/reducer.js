import { createStore } from "redux";

const persistedState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : { todos: [] };

export const store = createStore(
  reducer,
  persistedState,
  window.devToolsExtension && window.devToolsExtension()
);

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState()));
});

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
}
