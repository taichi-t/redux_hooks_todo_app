import projectReducer from "./projectReducer";
import usersReducer from "./usersReducer";
import { createObjArraysMatchedId } from "../../util/createObjArraysMatchedId";
import { v4 as uuidv4 } from "uuid";

export function rootReducer(state, { type, payload }) {
  let newHistory;
  let newRoutine;
  let result;
  switch (type) {
    case "ADD_NEW_ROUTINE_TO_NEW_FOLDER":
      newHistory = [...state.projects.history];
      newRoutine = createObjArraysMatchedId(newHistory, payload.todoIds);
      newRoutine = newRoutine.map((todo) => {
        delete todo.complete;
        return {
          ...todo,
          id: uuidv4(),
          check: false,
        };
      });
      result = [
        {
          id: uuidv4(),
          folderName: payload.folderName,
          items: [...newRoutine],
        },
      ];
      return {
        projects: projectReducer(state.projects, { type, payload }),
        users: usersReducer(
          {
            ...state.users,
            routine: state.users.routine.concat(result),
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
