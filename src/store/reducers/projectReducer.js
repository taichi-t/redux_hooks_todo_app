import moment from "moment";
import { deleteMatchedObjArrays } from "../../util/deleteMatchedObjArrays";
import { changeValuesOfObjArrays } from "../../util/changeValuesOfOjbArrays";
import { createObjArraysMatchedId } from "../../util/createObjArraysMatchedId";
const initialState = { todos: [], history: [], routine: [], userSetting: {} };

export function projectReducer(state = initialState, { type, payload }) {
  let newHistory;
  let result;
  let newRoutine;
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
      result = changeValuesOfObjArrays(newHistory, payload, "check", true);

      return {
        ...state,
        history: result,
      };

    case "DELETE_HISTORY":
      newHistory = [...state.history];
      result = deleteMatchedObjArrays(newHistory, payload);
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
      result = changeValuesOfObjArrays(newHistory, payload, "check", false);
      return {
        ...state,
        history: result,
      };

    case "ADD_ROUTINE":
      newHistory = [...state.history];
      newRoutine = createObjArraysMatchedId(newHistory, payload);
      newHistory = deleteMatchedObjArrays(newHistory, payload);
      newRoutine = newRoutine.map((todo) => {
        delete todo.complete;
        return {
          ...todo,
          check: false,
        };
      });
      console.log(newRoutine);

      return {
        ...state,
        history: newHistory,
        routine: newRoutine,
      };

    default:
      return state;
  }
}

export default projectReducer;
