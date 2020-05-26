import React from "react";
import { useSelector } from "react-redux";

//style
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

export const RoutineInput = () => {
  const routine = useSelector((state) => state.users.routine);
  console.log(routine);

  return (
    <>
      <LeftContainer></LeftContainer>
      <RightContainer>
        <IconButton aria-label="create a folder" color="primary">
          <CreateNewFolderIcon />
        </IconButton>
      </RightContainer>
    </>
  );
};

export default RoutineInput;

//style
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
