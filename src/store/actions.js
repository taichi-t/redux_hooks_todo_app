export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const toggleTodoAction = (todoId) => ({
  type: "TOGGLE_TODO",
  payload: todoId,
});

export const deleteTodoAction = (todoId) => ({
  type: "DELETE_TODO",
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
