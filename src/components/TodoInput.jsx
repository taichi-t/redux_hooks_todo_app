import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

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
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <Button
          type="submit"
          color="primary"
          style={{ margin: 0 }}
          startIcon={<AddIcon />}
        />
      </form>
    </Container>
  );
};

export default TodoInput;

//style
const Container = styled.div`
  text-align: center;
`;
