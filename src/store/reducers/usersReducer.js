import { v4 as uuidv4 } from "uuid";
const initialState = {
  routine: [],
  userSettings: { color: "#2196f3", type: "light" },
};

export function usersReducer(state = initialState, { type, payload }) {
  let newRoutine;
  switch (type) {
    case "CHANGE_FOLDER_NAME":
      newRoutine = state.routine.map((item) =>
        item.id === payload.key
          ? { ...item, folderName: payload.newFolderName }
          : item
      );
      return {
        ...state,
        routine: newRoutine,
      };
    case "DELETE_FOLDER":
      newRoutine = state.routine.filter((item) => item.id !== payload);
      return {
        ...state,
        routine: newRoutine,
      };
    case "ADD_ROUTINE_FROM_FOLDER":
      newRoutine = state.routine.map((item) =>
        item.id === payload.key
          ? {
              ...item,
              items: item.items.concat({
                id: uuidv4(),
                check: false,
                name: payload.routine,
              }),
            }
          : item
      );
      return {
        ...state,
        routine: newRoutine,
      };
    case "TOGGLE_ROUTINE":
      newRoutine = state.routine.map((item) =>
        item.id === payload.listId
          ? {
              ...item,
              items: item.items.map((el) =>
                el.id === payload.routineId ? { ...el, check: !el.check } : el
              ),
            }
          : item
      );
      return {
        ...state,
        routine: newRoutine,
      };

    case "DELETE_ROUTINE":
      newRoutine = state.routine.map((item) =>
        item.id === payload.listId
          ? {
              ...item,
              items: item.items.filter((el) => el.id !== payload.routineId),
            }
          : item
      );
      return {
        ...state,
        routine: newRoutine,
      };

    case "CREATE_NEW_FOLDER":
      newRoutine = state.routine.concat({
        id: uuidv4(),
        folderName: payload,
        items: [],
      });
      return {
        ...state,
        routine: newRoutine,
      };

    case "CHANGE_COLOR":
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          color: payload,
        },
      };

    case "CHANGE_TYPE":
      return {
        ...state,
        userSettings: {
          ...state.userSettings,
          type: state.userSettings.type === "light" ? "dark" : "light",
        },
      };

    default:
      return state;
  }
}

export default usersReducer;
