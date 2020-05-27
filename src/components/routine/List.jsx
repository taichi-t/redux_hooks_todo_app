import React from "react";
import { useSelector } from "react-redux";
import Input from "./Input";

/* ---------------------------------- UTIL ---------------------------------- */

/* ------------------------------- COMPONENTS ------------------------------- */
import Lists from "./create/Lists";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import ListIcon from "@material-ui/icons/List";
import { useTheme } from "@material-ui/core/styles";

export const List = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const routine = useSelector((state) => state.users.routine);

  return (
    <StyledPaper>
      <Title>
        <ListIcon fontSize="large" />
      </Title>
      {routine && routine.length === 0 ? (
        <Message color={theme.palette.text.hint}>
          There is no routine...
        </Message>
      ) : (
        <Lists objects={routine && routine} />
      )}

      <Input />
    </StyledPaper>
  );
};

export default List;

/* ---------------------------------- STYLE --------------------------------- */
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
