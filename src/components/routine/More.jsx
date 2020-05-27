import React from "react";
import { withStyles } from "@material-ui/core/styles";

/* ---------------------------------- style --------------------------------- */
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { makeStyles } from "@material-ui/core/styles";

export const More = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const {
    anchorEl,
    setAnchorEl,
    setAdd,
    openCollapseList,
    setOpenCollapseList,
  } = props;
  const classes = useStyles();

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAdd = () => {
    if (!openCollapseList) {
      setOpenCollapseList(true);
    }
    setAdd(true);
  };

  return (
    <>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
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
        <StyledMenuItem button onClick={handleAdd}>
          <ListItemIcon className={classes.menuButton}>
            <PlaylistAddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add" />
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
