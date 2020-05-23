import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HistoryInput } from "./HistoryInput";
//actions
import { selectHistoryAction } from "../store/actions";

//common
import { sortByDate } from "../common/sortByDate";
import { createList } from "../common/createList";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import HistoryIcon from "@material-ui/icons/History";
import { useTheme } from "@material-ui/core/styles";

export const HistoryList = () => {
  //state
  const theme = useTheme();
  const history = useSelector((state) => state.history);
  const [sortedHistory, setsortedHistory] = useState();

  //dispatchActions
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));

  useEffect(() => {
    setsortedHistory(sortByDate(history));
  }, [history]);

  //toggle components
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

      <HistoryInput />
    </StyledPaper>
  );
};

export default HistoryList;

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

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
