import React from "react";
import { useSelector } from "react-redux";
import RepeatIcon from "@material-ui/icons/Repeat";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const RoutineWork = () => {
  //state
  const routine = useSelector((state) => state.routine);
  console.log(routine);
  return (
    <StyledPaper>
      <Title>
        <RepeatIcon fontSize="large" />
      </Title>
    </StyledPaper>
  );
};

export default RoutineWork;

//style

const StyledPaper = styled(Paper)`
  margin: 1rem;
  max-height: 50rem;
  overflow: scroll;
`;

const Title = styled.h2`
  font-weight: normal;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
`;
