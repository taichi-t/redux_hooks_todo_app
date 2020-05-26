import React from "react";
// import { useSelector } from "react-redux";
// import RepeatIcon from "@material-ui/icons/Repeat";
import ListIcon from "@material-ui/icons/List";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const RoutineWork = () => {
  //state
  // const routine = useSelector((state) => state.routine);

  return (
    <StyledPaper>
      <Title>
        <ListIcon fontSize="large" />
      </Title>
    </StyledPaper>
  );
};

export default RoutineWork;

//style

const StyledPaper = styled(Paper)`
  margin: 1rem;
  max-height: 100vh;
  overflow: scroll;
`;

const Title = styled.h2`
  font-weight: normal;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
`;
