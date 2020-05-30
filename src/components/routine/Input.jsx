import React, { useState } from "react";
/* ------------------------------- COMPONENTS ------------------------------- */
import { Form as DialogForm } from "./dialog/Form";

/* ---------------------------------- style --------------------------------- */
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

export const Input = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  // const routine = useSelector((state) => state.users.routine);
  // console.log(routine);
  const [openDialogForm, setDialogForm] = useState(false);

  /* ----------------------------- HANDLE ACTIONS ----------------------------- */
  const handleCreate = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <DialogForm
        openDialogFormOfRoutine={openDialogForm}
        setDialogFormOfRoutine={setDialogForm}
      />
      <LeftContainer></LeftContainer>
      <RightContainer>
        <IconButton aria-label="create a folder" color="primary">
          <CreateNewFolderIcon onClick={handleCreate} />
        </IconButton>
      </RightContainer>
    </>
  );
};

export default Input;

/* ---------------------------------- style --------------------------------- */
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
