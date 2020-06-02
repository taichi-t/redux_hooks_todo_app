import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import { addRoutineAction } from "../../store/actions";

/* ---------------------------------- style --------------------------------- */
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../store/context/provider";

export const Form = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const history = useSelector((state) => state.projects.history);
  const [folderName, setFolderName] = useState("");
  const { Ui, setUi } = useContext(UiContext);

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
  const handleClose = (e) => {
    e.preventDefault();
    setUi({
      ...Ui,
      dialogFormFromHistory: false,
      dialogFormFromRoutine: false,
    });
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (folderName.trim() === "") return;
    if (Ui.dialogFormFromHistory) {
      addRoutine(todoIds, folderName);
      setFolderName("");
    }
    if (Ui.dialogFormFromRoutine) {
      addRoutine([], folderName);
      setFolderName("");
    }
    setUi({
      ...Ui,
      dialogFormFromHistory: false,
      dialogFormFromRoutine: false,
    });
  };

  return (
    <>
      <Dialog
        open={Ui.dialogFormFromRoutine || Ui.dialogFormFromHistory}
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
              label="name"
              type="text"
              fullWidth={true}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
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
