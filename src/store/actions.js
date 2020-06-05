/* -------------------------------------------------------------------------- */
/*                                TODO ACTIONS                                */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- ADD ---------------------------------- */
export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

/* --------------------------------- UPDATE --------------------------------- */
export const toggleTodoAction = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});
export const doneTodoAction = (todoId) => ({
  type: "DONE_TODO",
  payload: todoId,
});
export const selectAllAction = () => ({
  type: "SELECT_ALL",
});
export const executeAction = () => ({
  type: "EXECUTE_TODO",
});
export const uncheckAction = () => ({
  type: "UNCHECK_TODO",
});

/* --------------------------------- DELETE --------------------------------- */
export const deleteTodoAction = (todoId) => ({
  type: "DELETE_TODO",
  payload: todoId,
});

/* -------------------------------------------------------------------------- */
/*                               HISTORY ACTIONS                              */
/* -------------------------------------------------------------------------- */

/* --------------------------------- DELETE --------------------------------- */
export const deleteHistoryAction = (todoIds) => ({
  type: "DELETE_HISTORY",
  payload: todoIds,
});

/* --------------------------------- UPDATE --------------------------------- */
export const selectHistoryAction = (todoId) => ({
  type: "SELECT_HISTORY",
  payload: todoId,
});
export const selectHistoriesAction = (todoIds) => ({
  type: "SELECT_HISTORIES",
  payload: todoIds,
});
export const selectAllHistoryAction = () => ({
  type: "SELECT_ALL_HISTORY",
});
export const uncheckHistoryAction = () => ({
  type: "UNCHECK_HISTORY",
});
export const uncheckHistoriesAction = (todoIds) => ({
  type: "UNCHECK_HISTORIES",
  payload: todoIds,
});

/* -------------------------------------------------------------------------- */
/*                               ROUTINE ACTIONS                              */
/* -------------------------------------------------------------------------- */
export const addRoutineAction = (folderName) => ({
  type: "ADD_NEW_ROUTINE_TO_NEW_FOLDER",
  payload: { folderName },
});

export const changeFolderNameAction = (newFolderName, key) => ({
  type: "CHANGE_FOLDER_NAME",
  payload: { newFolderName, key },
});

export const DeleteFolderAction = (key) => ({
  type: "DELETE_FOLDER",
  payload: key,
});

export const addRoutineFromFolderAction = (key, routine) => ({
  type: "ADD_ROUTINE_FROM_FOLDER",
  payload: { key, routine },
});

export const toggleRoutineAction = (listId, routineId) => ({
  type: "TOGGLE_ROUTINE",
  payload: { listId, routineId },
});

export const deleteRoutineAction = (listId, routineId) => ({
  type: "DELETE_ROUTINE",
  payload: { listId, routineId },
});

export const addNewRoutineToExistFolderAction = (listId) => ({
  type: "ADD_NEW_ROUTINE_TO_EXIT_FOLDER",
  payload: listId,
});

export const createNewFolderAction = (folderName) => ({
  type: "CREATE_NEW_FOLDER",
  payload: folderName,
});

/* -------------------------------------------------------------------------- */
/*                                USER SETTINGS                               */
/* -------------------------------------------------------------------------- */
export const changeSettingColorAction = (color) => ({
  type: "CHANGE_COLOR",
  payload: color,
});

export const changeTypeAction = () => ({
  type: "CHANGE_TYPE",
});
