const initialState = { routine: [], userSettings: {} };

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "CHANGE_FOLDER_NAME":
      const oldKey = Object.keys(state.routine[payload.index]);
      return {
        ...state,
        routine: {
          ...state.routine,
          [payload.index]: {
            [payload.newFolderName]: state.routine[payload.index][oldKey[0]],
          },
        },
      };
    default:
      return state;
  }
}

export default usersReducer;
