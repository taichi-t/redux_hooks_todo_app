const initialState = { todos: [], history: [] };

export function projectReducer(state = initialState, { type, payload }) {
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
        history: state.history.concat(
          state.todos.filter((todo) => todo.id === payload)
        ),
      };
    case "SELECT_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.complete ? todo : { ...todo, complete: true }
        ),
      };
    case "EXECUTE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.complete !== true),
        history: state.history.concat(
          state.todos.filter((todo) => todo.complete === true)
        ),
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
