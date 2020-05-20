import moment from "moment";
const initialState = { todos: [], history: [] };

export function projectReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        ),
      };
    case "DELETE_TODO":
      let newHistory = state.todos.filter((todo) => todo.id === payload);

      newHistory.map(
        (item) => (item.finishedAt = moment().format("YYYY-MM-DD"))
      );

      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        history: state.history.concat(newHistory),
      };
    case "SELECT_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.complete ? todo : { ...todo, complete: true }
        ),
      };
    case "EXECUTE_TODO":
      let newHistories = state.todos.filter((todo) => todo.complete === true);
      newHistories.map(
        (history) => (history.finishedAt = moment().format("YYYY-MM-DD"))
      );
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.complete !== true),
        history: state.history.concat(newHistories),
      };
    case "UNCHECK_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.complete ? { ...todo, complete: false } : todo
        ),
      };
    default:
      return state;
  }
}

export default projectReducer;
