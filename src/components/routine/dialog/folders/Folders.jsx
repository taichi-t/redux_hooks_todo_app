import React from "react";

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */
import { DialogFoldersList } from "./List";

export const DialogFolders = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const { openDialogFolders, setDialogFolders, setDialogForm } = props;

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleClose = (value) => {
    setDialogFolders(false);
    console.log(value);
    if (typeof value !== "string") return;
  };

  const handleDialogFormOpen = () => {
    setDialogFolders(false);
    setDialogForm(true);
  };

  return (
    <>
      <DialogFoldersList
        openDialogFolders={openDialogFolders}
        handleClose={handleClose}
        handleDialogFormOpen={handleDialogFormOpen}
      />
    </>
  );
};

export default DialogFolders;
