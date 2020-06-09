import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import { addRoutineAction, createNewFolderAction } from "../../store/actions";

/* ---------------------------------- HOOKS --------------------------------- */
import { useEmojiPicker } from "../../hooks/useEmojiPicker";

/* ---------------------------------- style --------------------------------- */
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../store/context/provider";

export const Form = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const [folderName, setFolderName] = useState("");
  const { Ui, setUi } = useContext(UiContext);
  const [emojipicker, handleEmojiOpen, open] = useEmojiPicker(
    folderName,
    setFolderName
  );
  const classes = useStyles();

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const addRoutine = (todoIds, folderName) =>
    dispatch(addRoutineAction(todoIds, folderName));
  const createNewFolder = (folderName) =>
    dispatch(createNewFolderAction(folderName));

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */

  const handleClose = (e) => {
    e.preventDefault();
    setUi({
      ...Ui,
      dialogFormFromHistory: false,
      dialogFormFromRoutine: false,
    });
    setFolderName("");
  };

  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (folderName.trim() === "") return;
    if (Ui.dialogFormFromHistory) {
      addRoutine(folderName);
      setFolderName("");
    }
    if (Ui.dialogFormFromRoutine) {
      createNewFolder(folderName);
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
        disableBackdropClick={open ? true : false}
      >
        <DialogTitle id="form-dialog-title">Create a folder</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent className={classes.root}>
            <TextField
              label="name"
              type="text"
              value={folderName}
              onChange={handleChange}
              fullWidth={true}
            ></TextField>
            <div>
              <IconButton
                onClick={handleEmojiOpen}
                edge="start"
                size="small"
                color="default"
                className={classes.emojiButton}
              >
                <EmojiEmotionsIcon />
              </IconButton>
              {emojipicker}
            </div>
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

/* ---------------------------------- STYLE --------------------------------- */
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  emojiButton: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
