import React, { useContext } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- ACITONS -------------------------------- */
import { addNewRoutineToExistFolderAction } from "../../../store/actions";

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
  /*                              DISPATCH ACTIONS                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const addHistoryToExitFolder = (listId) =>
    dispatch(addNewRoutineToExistFolderAction(listId));

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleListItemClick = (e) => {
    e.preventDefault();
    addHistoryToExitFolder(item.id);
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
