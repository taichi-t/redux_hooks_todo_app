import React from "react";

/* ---------------------------------- STYLE --------------------------------- */
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";

export const DialogFoldersItem = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { index, handleListItemClick } = props;

  return (
    <>
      <ListItem button onClick={() => handleListItemClick(index)}>
        <ListItemAvatar>
          <FolderIcon color="action" />
        </ListItemAvatar>
        <ListItemText primary={index} />
      </ListItem>
    </>
  );
};
export default DialogFoldersItem;
