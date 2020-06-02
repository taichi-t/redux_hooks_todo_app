const initialState = { routine: {}, userSettings: {} };

export function usersReducer(state = initialState, { type, payload }) {
  let resultObject = {};
  let newRoutine;
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
      newRoutine = { ...state.routine };
      for (let key in newRoutine) {
        if (key !== payload.index) {
          resultObject[key] = newRoutine[key];
        } else;
      }
      return {
        ...state,
        routine: {
          ...resultObject,
        },
      };
    case "ADD_ROUTINE_FROM_FOLDER":
      let newObject = {
        id: payload.routineId,
        name: payload.text,
        check: false,
      };

      console.log(newObject);
      return {
        ...state,
        routine: {
          ...state.routine,
          [payload.index]: {
            [payload.folderName]: state.routine[payload.index][
              payload.folderName
            ].concat(newObject),
          },
        },
      };
    default:
      return state;
  }
}

export default usersReducer;
