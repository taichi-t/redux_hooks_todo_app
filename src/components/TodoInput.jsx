import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../store/actions";
import { selectAllAction } from "../store/actions";
import { executeAction } from "../store/actions";
import { uncheckAction } from "../store/actions";
import { v4 as uuidv4 } from "uuid";

//util
import { toggleSelectAllButton } from "../util/toggleSelectAllButton";

//style
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import UndoIcon from "@material-ui/icons/Undo";

export const TodoInput = () => {
  //state
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const [isActiveExecuteButton, setIsActiveExecuteButton] = useState(true);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);

  //dispatch actions
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const selectAll = () => dispatch(selectAllAction());
  const execute = () => dispatch(executeAction());
  const uncheck = () => dispatch(uncheckAction());

  useEffect(() => {
    const indicatorOfExecuteButton = todos.find(
      (todo) => todo.complete === true
    );

    toggleSelectAllButton(
      todos,
      setToggleButton,
      setIsActiveSellectAll,
      "complete"
    );

    //to toggle executeButton
    if (indicatorOfExecuteButton === undefined || todos.length === 0) {
      setIsActiveExecuteButton(true);
    } else {
      setIsActiveExecuteButton(false);
    }
  }, [todos]);

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

  const handleUncheck = (e) => {
    e.preventDefault();
    uncheck();
  };

  const button = toggleButton ? (
    <Button color="secondary" startIcon={<UndoIcon />} onClick={handleUncheck}>
      <Text fontSize={0.5}>Uncheck All</Text>
    </Button>
  ) : (
    <Button
      color="primary"
      startIcon={<DoneAllIcon />}
      disabled={isActiveSellectAllButton}
      onClick={handleSelect}
    >
      <Text fontSize={0.5}>Select All</Text>
    </Button>
  );
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
          <Box>
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
          </Box>
          {button}
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
  padding: 1rem;
`;

const Text = styled.p`
  font-size: ${(props) => props.fontSize}rem;
`;

const Box = styled.div``;

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.success.main,
  },
}))(Button);
