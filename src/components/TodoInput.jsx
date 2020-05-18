import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../store/actions";
import { selectAllAction } from "../store/actions";
import { executeAction } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { withStyles } from "@material-ui/core/styles";
// import UndoIcon from "@material-ui/icons/Undo";

export const TodoInput = () => {
  //state
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const [isActiveExecuteButton, setIsActiveExecuteButton] = useState(true);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);
  // const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    const indicatorWithExecuteButton = todos.find(
      (todo) => todo.complete === true
    );

    const indicatorWithSellectAllButton = todos.find(
      (todo) => todo.complete === false
    );

    //to toggle selectAllButton

    if (todos.length === 0 || indicatorWithSellectAllButton === undefined) {
      setIsActiveSellectAll(true);
    } else {
      setIsActiveSellectAll(false);
    }

    //to toggle executeButton
    if (indicatorWithExecuteButton === undefined || todos.length === 0) {
      setIsActiveExecuteButton(true);
    } else {
      setIsActiveExecuteButton(false);
    }
  }, [todos]);

  //dispatch actions
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const selectAll = () => dispatch(selectAllAction());
  const execute = () => dispatch(executeAction());

  //handle functions
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

  const handleSelect = (e) => {
    e.preventDefault();
    selectAll();
  };

  const handleExecute = (e) => {
    e.preventDefault();
    execute();
  };

  // const button = toggleButton ? (
  //   <Button color="primary" startIcon={<UndoIcon />} onClick={handleSelect}>
  //     <Text fontSize={0.5}>Uncheck All</Text>
  //   </Button>
  // ) : (

  // );
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
          <Button
            color="primary"
            startIcon={<DoneAllIcon />}
            disabled={isActiveSellectAllButton}
            onClick={handleSelect}
          >
            <Text fontSize={0.5}>Select All</Text>
          </Button>
          <ColorButton
            onClick={handleExecute}
            startIcon={<CheckCircleOutlineIcon />}
            disabled={isActiveExecuteButton}
          >
            <Text fontSize={0.5}>Execute</Text>
          </ColorButton>
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

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.success.main,
  },
}))(Button);
