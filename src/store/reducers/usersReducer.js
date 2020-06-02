const initialState = { routine: {}, userSettings: {} };

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
    case "DELETE_FOLDER":
      console.log(state);
      let newRoutine = { ...state.routine };
      let result = {};
      for (let key in newRoutine) {
        if (key !== payload.index) {
          result[key] = newRoutine[key];
        } else;
      }

      return {
        ...state,
        routine: {
          ...result,
        },
      };
    default:
      return state;
  }
}

export default usersReducer;
