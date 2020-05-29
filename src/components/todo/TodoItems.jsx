import React, { useState } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- ATIONS --------------------------------- */
import {
  toggleTodoAction,
  deleteTodoAction,
  doneTodoAction,
} from "../../store/actions";

/* ---------------------------------- STYLE --------------------------------- */
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

export const TodoItems = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { todo } = props;
  const [hidden, setHidden] = useState(false);
  const classes = useStyles();

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
  const handleShow = (e) => {
    e.stopPropagation();
    setHidden(!hidden);
  };

  return (
    <>
      <Paper
        key={todo.id}
        component="div"
        onClick={((e) => e.preventDefault(), toggleTodo.bind(null, todo.id))}
        className={classes.root}
      >
        <Checkbox
          type="checkbox"
          checked={todo.complete}
          color="default"
          className={classes.checkbox}
        />
        <TextContainer>
          <Text complete={todo.complete} onClick={handleShow} active={hidden}>
            {todo.name}
          </Text>
        </TextContainer>

        <IconButton
          color="secondary"
          onClick={deleteTodo.bind(null, todo.id)}
          className={classes.deleteButton}
          size="small"
        >
          <BackspaceOutlinedIcon />
        </IconButton>

        <ItemRight>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DoneIcon />}
            disabled={!todo.complete}
            onClick={doneTodo.bind(null, todo.id)}
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
  checkbox: {
    position: "absolute",
    top: "0",
    left: "0",
    margin: "1rem 0 0 1rem",
    padding: 0,
  },
}));

const ItemRight = styled.div`
  text-align: right;
`;

const TextContainer = styled.div``;

const Text = styled.p`
  margin: 2rem 0 1rem 0;
  font-size: 1.6rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: ${(props) => (props.complete ? "line-through" : null)};
  ${({ active }) =>
    active &&
    `
    cursor: pointer;
  word-wrap: break-word;
  text-overflow: initial;
  overflow: initial;
  white-space: initial;
  `}
`;
