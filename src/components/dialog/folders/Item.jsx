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
  const { item } = props;
  const { Ui, setUi } = useContext(UiContext);
  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleListItemClick = (e) => {
    e.preventDefault(e.target);
    setUi({ ...Ui, dialogFolder: false });
  };

  return (
    <>
      <ListItem button onClick={handleListItemClick}>
        <ListItemAvatar>
          <FolderIcon color="action" />
        </ListItemAvatar>
        <ListItemText primary={item.folderName} />
      </ListItem>
    </>
  );
};
export default DialogFoldersItem;
