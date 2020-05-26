import React, { useState } from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

//style
import MenuItem from "@material-ui/core/MenuItem";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(3),
  },
}));

const colorArray = [
  "default",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
];

export const ColorPicker = (props) => {
  //state
  const { toggleTheme } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  //handle actions
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (item) => {
    if (typeof item === "object") {
      setAnchorEl(null);
    } else {
      setAnchorEl(null);
      toggleTheme(item);
    }
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        edge="start"
        className={classes.menuButton}
      >
        <ColorLensIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "17ch",
            height: "10rem",
          },
        }}
      >
        {colorArray.map((item, index) => (
          <MenuItem
            value={item}
            key={index}
            onClick={handleClose.bind(null, item)}
          >
            {item === "default" ? item : null}
            {item === "default" ? null : <StyledBoxColor color={item} />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ColorPicker;

const StyledBoxColor = styled(Box)`
  background-color: ${(props) => props.color};
  width: 1rem;
  height: 1rem;
`;
