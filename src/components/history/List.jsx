import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "./Input";

/* --------------------------------- util --------------------------------- */
import { sortByDate } from "../../util/sortByDate";

/* ------------------------------ components ------------------------------ */
import { CreateLists } from "./CreateLists";

/* --------------------------------- style -------------------------------- */
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import HistoryIcon from "@material-ui/icons/History";
import { useTheme } from "@material-ui/core/styles";

export const List = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const history = useSelector((state) => state.projects.history);
  const [sortedHistory, setsortedHistory] = useState();

  useEffect(() => {
    setsortedHistory(sortByDate(history));
  }, [history]);

  return (
    <StyledPaper>
      <Title>
        <HistoryIcon fontSize="large" />
      </Title>
      {history && history.length === 0 ? (
        <Message color={theme.palette.text.hint}>
          There is no history...
        </Message>
      ) : (
        <CreateLists objects={sortedHistory && sortedHistory} />
      )}

      <Input />
    </StyledPaper>
  );
};

export default List;

/* ---------------------------------- style --------------------------------- */
const StyledPaper = styled(Paper)`
  margin: 1rem;
  max-height: 50rem;
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
