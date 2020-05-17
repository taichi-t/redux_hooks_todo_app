import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";

export const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: uuidv4(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };
  return (
    <Container>
      <Paper>
        <form
          onSubmit={onSubmit}
          action="submit"
          noValidate
          autoComplete="off"
          style={{ padding: "1rem" }}
        >
          <Box>
            <Input
              type="text"
              name="todo"
              placeholder="create a todo"
              value={todo}
              onChange={onChange}
            />
            <Button type="submit" color="primary" startIcon={<AddIcon />}>
              ADD
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default TodoInput;

//style
const Container = styled.div`
  text-align: center;
  font-size: 1.6rem;
  max-width: 350px;
  padding: 1rem;
  margin: 0 auto;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
