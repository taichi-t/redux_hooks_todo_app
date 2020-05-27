import React from "react";

/* ---------------------------------- STYLE --------------------------------- */
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

export const DialogFoldersItem = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { index, handleListItemClick } = props;

  return (
    <>
      <ListItem button onClick={() => handleListItemClick(index)}>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={index} />
      </ListItem>
    </>
  );
};
export default DialogFoldersItem;
