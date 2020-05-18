const initialState = { todos: [] };

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
      };
    case "SELECT_ALL":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.complete === false ? { ...todo, complete: true } : todo
        ),
      };
    default:
      return state;
  }
}

export default projectReducer;
