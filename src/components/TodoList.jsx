import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../store/actions";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import { useTheme } from "@material-ui/core/styles";

export const TodoList = () => {
  const theme = useTheme();
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
  const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

  const message =
    todos.length === 0 ? (
      <Message color={theme.palette.text.hint}>There is no task...</Message>
    ) : null;

  return (
    <Container>
      {todos &&
        todos.map((todo) => (
          <Paper key={todo.id}>
            <Box onClick={toggleTodo.bind(null, todo.id)}>
              <ItemLeft>
                <Checkbox
                  type="checkbox"
                  checked={todo.complete}
                  color="primary"
                />
                <Text complete={todo.complete}>{todo.name}</Text>
              </ItemLeft>

              <ItemRight>
                {todo.complete ? (
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DoneIcon />}
                    onClick={deleteTodo.bind(null, todo.id)}
                  >
                    Done
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={deleteTodo.bind(null, todo.id)}
                  >
                    Delete
                  </Button>
                )}
              </ItemRight>
            </Box>
          </Paper>
        ))}
      {message}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  padding: 1rem;
  font-size: 1.6rem;
  max-width: 350px;
  margin: 0 auto;
`;

const Box = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
`;

const ItemRight = styled.div`
  text-align: right;
`;
const ItemLeft = styled.div`
  text-align: left;
`;

const Text = styled.span`
  text-decoration: ${(props) => (props.complete ? "line-through" : null)};
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
