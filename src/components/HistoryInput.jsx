import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteHistoryAction,
  selectAllHistoryAction,
  uncheckHistoryAction,
} from "../store/actions";

//style
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import UndoIcon from "@material-ui/icons/Undo";
import DoneAllIcon from "@material-ui/icons/DoneAll";
//common
import { checkHistory } from "../common/checkHistory";
import { toggleSelectAllButton } from "../common/toggleSelectAllButton";

export const HistoryInput = () => {
  //state
  const history = useSelector((state) => state.history);
  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);

  //dispatchActions
  const dispatch = useDispatch();
  const deleteHistory = (todoIds) => dispatch(deleteHistoryAction(todoIds));
  const slectAllHistory = () => dispatch(selectAllHistoryAction());
  const uncheckHistory = () => dispatch(uncheckHistoryAction());
  useEffect(() => {
    //toggle select button
    toggleSelectAllButton(
      history,
      setToggleButton,
      setIsActiveSellectAll,
      "check"
    );

    //toggle delete button
    if (checkHistory(history)) {
      setIsActiveDeleteButton(false);
    } else {
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
    deleteHistory(todoIds);
    setIsActiveDeleteButton(false);
  };

  const handleUncheck = (e) => {
    e.preventDefault();
    uncheckHistory();
  };

  const handleSelect = (e) => {
    e.preventDefault();
    slectAllHistory();
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
