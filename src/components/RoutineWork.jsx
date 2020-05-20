import React from "react";
import RepeatIcon from "@material-ui/icons/Repeat";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const RoutineWork = () => {
  return (
    <Container>
      <StyledPaper>
        <Title>
          <RepeatIcon fontSize="large" />
        </Title>
      </StyledPaper>
    </Container>
  );
};

export default RoutineWork;

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
