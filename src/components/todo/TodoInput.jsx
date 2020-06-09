import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../store/actions";
import { selectAllAction } from "../../store/actions";
import { executeAction } from "../../store/actions";
import { uncheckAction } from "../../store/actions";
import { v4 as uuidv4 } from "uuid";

/* ---------------------------------- UTIL ---------------------------------- */
import { toggleSelectAllButton } from "../../util/toggleSelectAllButton";

/* ---------------------------------- HOOKS --------------------------------- */
import { useEmojiPicker } from "../../hooks/useEmojiPicker";

/* ---------------------------------- STYLE --------------------------------- */
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import Paper from "@material-ui/core/Paper";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import UndoIcon from "@material-ui/icons/Undo";
import { makeStyles } from "@material-ui/core/styles";
import DoneIcon from "@material-ui/icons/Done";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { IconButton } from "@material-ui/core";

export const TodoInput = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.projects.todos);
  const [isActiveButton, setIsActiveButton] = useState(true);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  const [emojipicker, handleEmojiOpen] = useEmojiPicker(todo, setTodo);

  /* -------------------------------------------------------------------------- */
  /*                              DISPATCH ACTIONS                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch(addTodoAction(todo));
  const selectAll = () => dispatch(selectAllAction());
  const execute = () => dispatch(executeAction());
  const uncheck = () => dispatch(uncheckAction());
  const classes = useStyles();

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
      setIsActiveButton(true);
    } else {
      setIsActiveButton(false);
    }
  }, [todos]);

  /* -------------------------------------------------------------------------- */
  /*                              HANDLE FUNCTIONS                              */
  /* -------------------------------------------------------------------------- */
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

  //toggle components
  const button = toggleButton ? (
    <Button
      color="secondary"
      startIcon={<UndoIcon />}
      onClick={handleUncheck}
      variant="contained"
      size="small"
      className={classes.button}
    >
      Uncheck All
    </Button>
  ) : (
    <Button
      color="primary"
      startIcon={<DoneAllIcon />}
      disabled={isActiveSellectAllButton}
      onClick={handleSelect}
      variant="contained"
      size="small"
      className={classes.button}
    >
      Select All
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
              autoFocus={true}
            />
            <IconButton
              onClick={handleEmojiOpen}
              edge="start"
              size="small"
              color="default"
              className={classes.emojiButton}
            >
              <EmojiEmotionsIcon />
            </IconButton>
            {emojipicker}

            <IconButton
              type="submit"
              color="primary"
              size="small"
              edge="end"
              className={classes.button}
            >
              <AddIcon />
            </IconButton>
          </Box>
          {button}
          <Button
            onClick={handleExecute}
            startIcon={<DoneIcon />}
            disabled={isActiveButton}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Done
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TodoInput;

/* ---------------------------------- STYLE --------------------------------- */
const Container = styled.div`
  text-align: center;
  font-size: 1.6rem;
  padding: 1rem;
`;

const Box = styled.div``;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textAlign: "center",
    lineHeight: "initial",
  },
  emojiButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
