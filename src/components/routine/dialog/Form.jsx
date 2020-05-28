import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import { addRoutineAction } from "../../../store/actions";

/* ---------------------------------- style --------------------------------- */
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export const Form = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const history = useSelector((state) => state.projects.history);
  const { open, setState } = props;
  const [folderName, setFolderName] = useState("");

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const addRoutine = (todoIds, folderName) =>
    dispatch(addRoutineAction(todoIds, folderName));

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */
  let todoIds = [];
  history.map((item) => {
    if (item.check) {
      todoIds.push(item.id);
    } else;
    return item;
  });
  const handleClose = () => {
    console.log("hi");
    setState(false);
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState(false);
    if (folderName.trim() === "") return;
    addRoutine(todoIds, folderName);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">Create a folder</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="name"
              type="text"
              fullWidth={true}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary" type="submit">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Form;