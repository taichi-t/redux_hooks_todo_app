import React from "react";
import { useSelector } from "react-redux";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

export const History = () => {
  const history = useSelector((state) => state.history);

  return (
    <Container>
      <Paper>
        <Title>History</Title>
        <List subheader={<li />}>
          {[0, 1, 2, 3, 4].map((sectionId) => (
            <li key={`section-${sectionId}`}>
              <ul>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {history.map((item) => (
                  <ListItem key={`item-${sectionId}-${item}`}>
                    <ListItemText primary={`${item.name}`} />
                  </ListItem>
                ))}
              </ul>
            </li>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default History;

//style
const Container = styled.div`
  max-width: 350px;
`;

const Title = styled.h2`
  font-weight: normal;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
`;
