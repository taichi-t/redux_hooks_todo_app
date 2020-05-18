import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions";
import { selectAllAction } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

export const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const selectAll = () => dispatch(selectAllAction());

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: uuidv4(),
      name: todo,
      complete: false,
    });
    setTodo("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    selectAll();
  };
  return (
    <Container>
      <Paper>
        <form
          onSubmit={handleSubmit}
          action="submit"
          noValidate
          autoComplete="off"
          style={{ padding: "1rem" }}
        >
          <Input
            type="text"
            name="todo"
            placeholder="create a todo"
            value={todo}
            onChange={handleChange}
          />
          <Button type="submit" color="primary" startIcon={<AddIcon />}>
            ADD
          </Button>

          <StyledButton
            onClick={handleClick}
            color="primary"
            startIcon={<DoneAllIcon />}
          >
            <Text fontSize={0.5}>Select All</Text>
          </StyledButton>
          <StyledButton
            onClick={handleClick}
            color="primary"
            startIcon={<CheckCircleOutlineIcon />}
          >
            <Text fontSize={0.5}>Execute</Text>
          </StyledButton>
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

const Text = styled.p`
  font-size: ${(props) => props.fontSize}rem;
`;

const StyledButton = styled(Button)`
  margin-right: 1rem;
`;
