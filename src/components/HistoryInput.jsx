import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteHistoryAction,
  selectAllHistoryAction,
  uncheckHistoryAction,
  addRoutineAction,
} from "../store/actions";

//style
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from "@material-ui/icons/Undo";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

//util
import { checkHistory } from "../util/checkHistory";
import { toggleSelectAllButton } from "../util/toggleSelectAllButton";

export const HistoryInput = () => {
  //state
  const history = useSelector((state) => state.history);
  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState(true);
  const [isActiveAddRoutineButton, setIsActiveAddRoutineButton] = useState(
    true
  );
  const [toggleButton, setToggleButton] = useState(false);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);

  //dispatchActions
  const dispatch = useDispatch();
  const deleteHistory = (todoIds) => dispatch(deleteHistoryAction(todoIds));
  const slectAllHistory = () => dispatch(selectAllHistoryAction());
  const uncheckHistory = () => dispatch(uncheckHistoryAction());
  const addRoutine = (todoIds) => dispatch(addRoutineAction(todoIds));

  useEffect(() => {
    //toggle select-button
    toggleSelectAllButton(
      history,
      setToggleButton,
      setIsActiveSellectAll,
      "check"
    );

    //toggle delete-button and add-routine-button
    if (checkHistory(history)) {
      setIsActiveAddRoutineButton(false);
      setIsActiveDeleteButton(false);
    } else {
      setIsActiveAddRoutineButton(true);
      setIsActiveDeleteButton(true);
    }
  }, [history]);

  //handle actions
  const handleDelete = (e) => {
    e.preventDefault();
    let todoIds = [];
    history.map((item) => {
      if (item.check) {
        todoIds.push(item.id);
      } else;
      return item;
    });

    setIsActiveDeleteButton(false);
    deleteHistory(todoIds);
  };

  const handleUncheck = (e) => {
    e.preventDefault();
    uncheckHistory();
  };

  const handleSelect = (e) => {
    e.preventDefault();
    slectAllHistory();
  };

  const handleAdd = (e) => {
    e.preventDefault();
    let todoIds = [];
    history.map((item) => {
      if (item.check) {
        todoIds.push(item.id);
      } else;
      return item;
    });
    setIsActiveAddRoutineButton(false);
    addRoutine(todoIds);
  };

  //toggle components
  const button = toggleButton ? (
    <IconButton color="secondary" onClick={handleUncheck}>
      <UndoIcon />
    </IconButton>
  ) : (
    <IconButton
      color="primary"
      aria-label="select all"
      disabled={isActiveSellectAllButton}
      onClick={handleSelect}
    >
      <DoneAllIcon />
    </IconButton>
  );
  return (
    <>
      <LeftContainer>{button}</LeftContainer>
      <RightContainer>
        <IconButton
          aria-label="add routine"
          color="primary"
          disabled={isActiveAddRoutineButton}
          onClick={handleAdd}
        >
          <PlaylistAddIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          disabled={isActiveDeleteButton}
          color="secondary"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </RightContainer>
    </>
  );
};

//style
const LeftContainer = styled.div`
  display: inline-block;
  text-align: left;
  width: 50%;
`;

const RightContainer = styled.div`
  display: inline-block;
  text-align: right;
  width: 50%;
`;
