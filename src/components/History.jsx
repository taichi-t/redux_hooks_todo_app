import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createLabel } from "../common/createLabel";
import { createList } from "../common/createList";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

import HistoryIcon from "@material-ui/icons/History";

export const History = () => {
  const history = useSelector((state) => state.history);
  const [organizedHistory, setOrganizedHistory] = useState();

  useEffect(() => {
    setOrganizedHistory(createLabel(history));
  }, [history]);

  return (
    <Container>
      <StyledPaper>
        <Title>
          <HistoryIcon fontSize="large" />
        </Title>
        <List subheader={<li />}>
          {organizedHistory && createList(organizedHistory)}
        </List>
      </StyledPaper>
    </Container>
  );
};

export default History;

//style
const Container = styled.div`
  padding: 1rem;
`;

const StyledPaper = styled(Paper)`
  max-height: 600px;
  overflow: scroll;
`;

const Title = styled.h2`
  font-weight: normal;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
`;
