import React from "react";

/* -------------------------------------------------------------------------- */
/*                                 COMPONENTS                                 */
/* -------------------------------------------------------------------------- */
import DialogFoldersList from "./List";

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
    if (typeof value === "string") {
      console.log(value);
    }
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
