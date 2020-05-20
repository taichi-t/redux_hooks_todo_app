import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortByDate } from "../common/sortByDate";
import { createList } from "../common/createList";
import { selectHistoryAction } from "../store/actions";
import { checkHistory } from "../common/checkHistory";
import { deleteHistoryAction } from "../store/actions";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import HistoryIcon from "@material-ui/icons/History";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTheme } from "@material-ui/core/styles";

export const History = () => {
  //state
  const theme = useTheme();
  const history = useSelector((state) => state.history);
  const [sortedHistory, setsortedHistory] = useState();
  const [isActiveDeleteButton, setIsActiveDeleteButton] = useState(true);

  //dispatchActions
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));
  const deleteHistory = (todoIds) => dispatch(deleteHistoryAction(todoIds));

  useEffect(() => {
    if (checkHistory(history)) {
      setIsActiveDeleteButton(false);
    } else {
      setIsActiveDeleteButton(true);
    }

    setsortedHistory(sortByDate(history));
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

  const content =
    history && history.length === 0 ? (
      <Message color={theme.palette.text.hint}>There is no history...</Message>
    ) : (
      sortedHistory && createList(sortedHistory, selectHistory)
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

      <Footer>
        <IconButton
          aria-label="delete"
          disabled={isActiveDeleteButton}
          color="secondary"
          style={{ textAlign: "right", fontSize: "0.5rem" }}
          onClick={handleDelete}
        >
          <DeleteIcon />
          DELETE All
        </IconButton>
      </Footer>
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

const Footer = styled.div`
  text-align: right;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
