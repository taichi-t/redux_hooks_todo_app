import React from "react";
import { useSelector } from "react-redux";

/* --------------------------------- ATIONS --------------------------------- */

/* ---------------------------------- STYLE --------------------------------- */
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";

/* ------------------------------- COMPONENTS ------------------------------- */
import { TodoItems } from "./TodoItems";

export const TodoList = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const todos = useSelector((state) => state.projects.todos);

  //toggle component
  const message =
    todos.length === 0 ? (
      <Message color={theme.palette.text.hint}>There is no task...</Message>
    ) : null;

  return (
    <Container>
      {todos && todos.map((todo) => <TodoItems todo={todo} key={todo.id} />)}
      {message}
    </Container>
  );
};

export default TodoList;

/* ---------------------------------- STYLE --------------------------------- */

const Container = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
