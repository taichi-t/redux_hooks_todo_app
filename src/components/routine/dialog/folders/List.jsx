import React, { useContext } from "react";
import { useSelector } from "react-redux";

/* ---------------------------------- STYLE --------------------------------- */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import DialogFoldersItem from "./Item";
import { makeStyles } from "@material-ui/core/styles";

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../../../store/context/provider";

export const DialogFoldersList = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */

  const routine = useSelector((state) => state.users.routine);
  const { Ui, setUi } = useContext(UiContext);
  const classes = useStyles();

  let keyArray = [];
  for (let key in routine) {
    const index = Object.keys(routine[key]);
    keyArray.push(index[0]);
  }

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */

  // const handleListItemClick = (value) => {
  //   setUi({ ...Ui, dialogFolder: false });
  //   if (typeof value !== "string") return;
  // };

  const handleDialogFormOpen = () => {
    setUi({ ...Ui, dialogFolder: false, dialogForm: true });
  };

  const handleClose = (value) => {
    setUi({ ...Ui, dialogFolder: false });
    if (typeof value !== "string") return;
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={Ui.dialogFolder}
    >
      <DialogTitle id="dialog-title">add routines</DialogTitle>
      <List className={classes.list}>
        {keyArray &&
          keyArray.map((key, index) => (
            <DialogFoldersItem index={key} key={index} />
          ))}
      </List>
      <ListItem button onClick={() => handleDialogFormOpen()}>
        <ListItemAvatar>
          <AddIcon color="primary" />
        </ListItemAvatar>
        <ListItemText primary="Create a new folder" />
      </ListItem>
    </Dialog>
  );
};

export default DialogFoldersList;

/* ---------------------------------- STYLE --------------------------------- */
const useStyles = makeStyles((theme) => ({
  list: {
    maxHeight: "10rem",
    overflow: "scroll",
  },
}));
