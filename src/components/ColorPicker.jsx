import React, { useState } from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

//style
import MenuItem from "@material-ui/core/MenuItem";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";

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
  // const [color, setColor] = useState("default");
  const { toggleTheme } = props;

  // const handleChange = (e) => {
  //   setColor(e.target.value);
  //   toggleTheme(e.target.value);
  // };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (item) => {
    setAnchorEl(null);
    toggleTheme(item);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ColorLensIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "16ch",
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
    </div>
  );
};

export default ColorPicker;

const StyledBoxColor = styled(Box)`
  background-color: ${(props) => props.color};
  width: 1rem;
  height: 1rem;
`;
