import moment from "moment";
import { multipleDelete } from "../../util/multipleDelete";
import { multipleCheck } from "../../util/multipleCheck";
const initialState = { todos: [], history: [] };

export function projectReducer(state = initialState, { type, payload }) {
  let newHistory;
  let result;
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
      newHistory = state.todos.filter((todo) => todo.id === payload);

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
      newHistory = state.todos.filter((todo) => todo.complete === true);
      newHistory.map((history) => {
        history.finishedAt = moment().format("YYYY-MM-DD");
        history.check = false;
        return history;
      });
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.complete !== true),
        history: newHistory.concat(state.history),
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

    case "SELECT_HISTORIES":
      newHistory = [...state.history];
      result = multipleCheck(newHistory, payload, true);

      return {
        ...state,
        history: result,
      };

    case "DELETE_HISTORY":
      newHistory = [...state.history];
      result = multipleDelete(newHistory, payload);
      return {
        ...state,
        history: result,
      };

    case "SELECT_ALL_HISTORY":
      return {
        ...state,
        history: state.history.map((todo) =>
          todo.check ? todo : { ...todo, check: true }
        ),
      };

    case "UNCHECK_HISTORY":
      return {
        ...state,
        history: state.history.map((todo) =>
          todo.check ? { ...todo, check: false } : todo
        ),
      };
    case "UNCHECK_HISTORIES":
      newHistory = [...state.history];
      result = multipleCheck(newHistory, payload, false);
      return {
        ...state,
        history: result,
      };

    default:
      return state;
  }
}

export default projectReducer;
