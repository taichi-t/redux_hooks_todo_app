import moment from "moment";
import { multipleDelete } from "../../common/multipleDelete";
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

    case "DONE_TODO":
      let newHistory = state.todos.filter((todo) => todo.id === payload);

      newHistory.map((item) => {
        item.finishedAt = moment().format("YYYY-MM-DD");
        item.check = false;
        return item;
      });
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
        history: newHistory.concat(...state.history),
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
          todo.complete ? todo : { ...todo, complete: true }
        ),
      };

    case "EXECUTE_TODO":
      let newHistories = state.todos.filter((todo) => todo.complete === true);
      newHistories.map((history) => {
        history.finishedAt = moment().format("YYYY-MM-DD");
        history.check = false;
        return history;
      });
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
    case "SELECT_HISTORY":
      return {
        ...state,
        history: state.history.map((todo) =>
          todo.id === payload ? { ...todo, check: !todo.check } : todo
        ),
      };
    case "DELETE_HISTORY":
      let copy_history = [...state.history];
      const result = multipleDelete(copy_history, payload);
      console.log(copy_history, state.history);

      return {
        ...state,
        history: result,
      };
    default:
      return state;
  }
}

export default projectReducer;
