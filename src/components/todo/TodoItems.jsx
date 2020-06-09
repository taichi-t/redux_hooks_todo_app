import React from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- ATIONS --------------------------------- */
import {
  toggleTodoAction,
  deleteTodoAction,
  doneTodoAction,
} from "../../store/actions";

/* ---------------------------------- HOOKS --------------------------------- */
import { useHideText } from "../../hooks/useHideText";

/* ---------------------------------- STYLE --------------------------------- */
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

export const TodoItems = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { todo } = props;
  const classes = useStyles();
  const [text] = useHideText();

  /* -------------------------------------------------------------------------- */
  /*                              DISPATCH ACTIONS                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
  const doneTodo = (todoId) => dispatch(doneTodoAction(todoId));

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */

  const handleToggle = (e) => {
    e.preventDefault();
    toggleTodo(todo.id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };

  const handleDone = (e) => {
    e.preventDefault();
    doneTodo(todo.id);
  };

  return (
    <>
      <Paper
        key={todo.id}
        component="div"
        onClick={handleToggle}
        className={classes.root}
      >
        {text(todo.name, todo.complete, "1rem 0", "1.4rem", "100%")}

        <IconButton
          color="secondary"
          onClick={handleDelete}
          className={classes.deleteButton}
          size="small"
        >
          <DeleteIcon />
        </IconButton>

        <ItemRight>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DoneIcon />}
            disabled={!todo.complete}
            onClick={handleDone}
            className={classes.doneButton}
            size="small"
          >
            Done
          </Button>
        </ItemRight>
      </Paper>
    </>
  );
};

export default TodoItems;

/* ---------------------------------- STYLE --------------------------------- */

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "1rem",
    marginBottom: "1rem",
  },
  deleteButton: {
    position: "absolute",
    top: "0",
    right: "0",
    margin: "1rem 1rem 0 0",
    padding: 0,
  },
  doneButton: {
    lineHeight: "initial",
  },
}));

const ItemRight = styled.div`
  text-align: right;
`;
