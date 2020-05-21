import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  selectHistoryAction,
  deleteHistoryAction,
  selectAllHistoryAction,
  uncheckHistoryAction,
} from "../store/actions";
//common
import { checkHistory } from "../common/checkHistory";
import { toggleSelectAllButton } from "../common/toggleSelectAllButton";
import { sortByDate } from "../common/sortByDate";
import { createList } from "../common/createList";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import HistoryIcon from "@material-ui/icons/History";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTheme } from "@material-ui/core/styles";
import UndoIcon from "@material-ui/icons/Undo";
import DoneAllIcon from "@material-ui/icons/DoneAll";

export const History = () => {
  //state
  const theme = useTheme();
  const history = useSelector((state) => state.history);
  const [sortedHistory, setsortedHistory] = useState();
  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState(true);
  const [toggleButton, setToggleButton] = useState(false);
  const [isActiveSellectAllButton, setIsActiveSellectAll] = useState(true);

  //dispatchActions
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));
  const deleteHistory = (todoIds) => dispatch(deleteHistoryAction(todoIds));
  const slectAllHistory = () => dispatch(selectAllHistoryAction());
  const uncheckHistory = () => dispatch(uncheckHistoryAction());

  useEffect(() => {
    setsortedHistory(sortByDate(history));

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

  //handleActions
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
  const content =
    history && history.length === 0 ? (
      <Message color={theme.palette.text.hint}>There is no history...</Message>
    ) : (
      sortedHistory && createList(sortedHistory, selectHistory)
    );

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
    <StyledPaper>
      <Title>
        <HistoryIcon fontSize="large" />
      </Title>
      <List
        subheader={<li />}
        style={{ maxHeight: "300px", overflow: "scroll" }}
      >
        {content}
      </List>

      <div>
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
      </div>
    </StyledPaper>
  );
};

export default History;

//style
const StyledPaper = styled(Paper)`
  margin: 1rem;
  max-height: 500px;
  overflow: scroll;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1rem 0;
`;

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

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
