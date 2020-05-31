import React, { useContext } from "react";
/* ------------------------------- COMPONENTS ------------------------------- */
import { Form as DialogForm } from "../dialog/Form";

/* ---------------------------------- STYLE --------------------------------- */
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../store/context/provider";

export const Input = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  // const routine = useSelector((state) => state.users.routine);
  // console.log(routine);

  const { Ui, setUi } = useContext(UiContext);

  /* ----------------------------- HANDLE ACTIONS ----------------------------- */
  const handleCreate = (e) => {
    setUi({ ...Ui, dialogForm: !Ui.dialogForm });
  };

  return (
    <>
      <DialogForm />
      <LeftContainer></LeftContainer>
      <RightContainer>
        <IconButton
          aria-label="create a folder"
          color="primary"
          onClick={handleCreate}
        >
          <CreateNewFolderIcon />
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
