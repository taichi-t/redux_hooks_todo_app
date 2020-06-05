import projectReducer from "./projectReducer";
import usersReducer from "./usersReducer";
import { createObjArraysMatchedId } from "../../util/createObjArraysMatchedId";
import { v4 as uuidv4 } from "uuid";

export function rootReducer(state, { type, payload }) {
  let copyHistory;
  let newRoutine;
  let result;
  let checkedId = [];
  state.projects.history.forEach((item) => {
    checkedId.push(item.id);
  });

  switch (type) {
    case "ADD_NEW_ROUTINE_TO_NEW_FOLDER":
      copyHistory = [...state.projects.history];
      newRoutine = createObjArraysMatchedId(copyHistory, checkedId);
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
        projects: projectReducer(
          {
            ...state.projects,
            history: state.projects.history.map((item) => {
              return {
                ...item,
                check: false,
              };
            }),
          },
          { type, payload }
        ),
        users: usersReducer(
          {
            ...state.users,
            routine: state.users.routine.concat(result),
          },
          { type, payload }
        ),
      };

    case "ADD_NEW_ROUTINE_TO_EXIT_FOLDER":
      copyHistory = [...state.projects.history];
      newRoutine = createObjArraysMatchedId(copyHistory, checkedId);
      newRoutine = newRoutine.map((todo) => {
        delete todo.complete;
        return {
          ...todo,
          id: uuidv4(),
          check: false,
        };
      });

      return {
        projects: projectReducer(
          {
            ...state.projects,
            history: state.projects.history.map((item) => {
              return {
                ...item,
                check: false,
              };
            }),
          },
          { type, payload }
        ),
        users: usersReducer(
          {
            ...state.users,
            routine: state.users.routine.map((item) =>
              item.id === payload
                ? { ...item, items: item.items.concat(newRoutine) }
                : item
            ),
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
