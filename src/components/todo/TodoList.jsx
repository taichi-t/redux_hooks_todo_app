import React from "react";
import { useSelector, useDispatch } from "react-redux";

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
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";

export const TodoList = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const todos = useSelector((state) => state.projects.todos);
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

  //toggle component
  const message =
    todos.length === 0 ? (
      <Message color={theme.palette.text.hint}>There is no task...</Message>
    ) : null;

  return (
    <Container>
      {todos &&
        todos.map((todo) => (
          <Paper
            key={todo.id}
            component="div"
            onClick={
              ((e) => e.preventDefault(), toggleTodo.bind(null, todo.id))
            }
            className={classes.root}
          >
            <TextContainer>
              <Text
                complete={todo.complete}
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                <Checkbox
                  type="checkbox"
                  checked={todo.complete}
                  color="default"
                />
                {todo.name}
              </Text>
            </TextContainer>
            <IconButton
              color="secondary"
              edge="end"
              onClick={deleteTodo.bind(null, todo.id)}
              className={classes.deleteButton}
            >
              <BackspaceOutlinedIcon fontSize="small" />
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
        ))}
      {message}
    </Container>
  );
};

export default TodoList;

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

const Container = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 0;
  word-wrap: break-word;
`;

const ItemRight = styled.div`
  text-align: right;
`;

const Text = styled.p`
  margin-bottom: 0;
  text-decoration: ${(props) => (props.complete ? "line-through" : null)};
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
