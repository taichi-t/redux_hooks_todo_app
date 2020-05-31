import React, { useContext } from "react";

/* ---------------------------------- STYLE --------------------------------- */
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../../store/context/provider";

export const DialogFoldersItem = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { index } = props;
  const { Ui, setUi } = useContext(UiContext);
  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleListItemClick = (index) => {
    setUi({ ...Ui, dialogFolder: false });
    if (typeof index !== "string") return;
  };

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
