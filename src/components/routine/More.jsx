import React, { useContext } from "react";

/* ---------------------------------- style --------------------------------- */
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

/* ------------------------------ CONSTEXT API ------------------------------ */
import { UiContext } from "../../store/context/provider";

export const More = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { Ui, setUi } = useContext(UiContext);

  const classes = useStyles();

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */

  const handleClose = () => {
    setUi({ ...Ui, anchorEl: null });
  };

  return (
    <>
      <StyledMenu
        id="customized-menu"
        anchorEl={Ui.anchorEl}
        keepMounted
        open={Boolean(Ui.anchorEl)}
        onClick={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon className={classes.menuButton}>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon className={classes.menuButton}>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

const StyledMenu = withStyles((theme) => ({
  paper: {
    boxShadow: theme.shadows[3],
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: 0,
    },
  },
}))(MenuItem);
