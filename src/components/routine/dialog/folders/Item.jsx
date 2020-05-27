import React from "./node_modules/react";

/* ---------------------------------- STYLE --------------------------------- */
import ListItem from "./node_modules/@material-ui/core/ListItem";
import ListItemAvatar from "./node_modules/@material-ui/core/ListItemAvatar";
import ListItemText from "./node_modules/@material-ui/core/ListItemText";

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
