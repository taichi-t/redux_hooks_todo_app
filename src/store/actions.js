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
export const addRoutineAction = (todoIds, folderName) => ({
  type: "ADD_NEW_ROUTINE_TO_NEW_FOLDER",
  payload: { todoIds, folderName },
});

export const changeFolderNameAction = (folderId, newFolderName, index) => ({
  type: "CHANGE_FOLDER_NAME",
  payload: { folderId, newFolderName, index },
});
