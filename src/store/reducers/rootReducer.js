import projectReducer from "./projectReducer";
import usersReducer from "./usersReducer";
import { deleteMatchedObjArrays } from "../../util/deleteMatchedObjArrays";
import { createObjArraysMatchedId } from "../../util/createObjArraysMatchedId";

export function rootReducer(state, { type, payload }) {
  let newHistory;
  let newRoutine;

  switch (type) {
    case "ADD_NEW_ROUTINE_TO_NEW_FOLDER":
      newHistory = [...state.projects.history];
      newRoutine = createObjArraysMatchedId(newHistory, payload.todoIds);
      newHistory = deleteMatchedObjArrays(newHistory, payload.todoIds);
      newRoutine = newRoutine.map((todo) => {
        delete todo.complete;
        return {
          ...todo,
          check: false,
        };
      });

      return {
        projects: projectReducer(
          { ...state.projects, history: newHistory },
          { type, payload }
        ),
        users: usersReducer(
          {
            ...state.users,
            routine: {
              [payload.folderName]: newRoutine,
            },
          },
          { type, payload }
        ),
      };

    default:
      return {
        projects: projectReducer(state.projects, { type, payload }),
        users: usersReducer(state.users, { type, payload }),
      };
  }
}

// newRoutine.concat(state.users.routine);
