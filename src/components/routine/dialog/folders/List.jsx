import React from "react";
import { useSelector } from "react-redux";

/* ---------------------------------- STYLE --------------------------------- */
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import AddIcon from "@material-ui/icons/Add";
import DialogFoldersItem from "./Item";

export const DialogFoldersList = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { handleClose, openDialogFolders, handleDialogFormOpen } = props;
  const routine = useSelector((state) => state.users.routine);
  const routineKeys = Object.keys(routine);

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleListItemClick = (value) => {
    handleClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="dialog-title"
      open={openDialogFolders}
    >
      <DialogTitle id="dialog-title">add routines</DialogTitle>
      <List>
        {routineKeys &&
          routineKeys.map((key, index) => (
            <DialogFoldersItem
              index={key}
              handleListItemClick={handleListItemClick}
              key={index}
            />
          ))}

        <ListItem autoFocus button onClick={() => handleDialogFormOpen()}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Create new folder" />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default DialogFoldersList;
