import React, { useState } from "react";
import styled from "styled-components";
import Box from "@material-ui/core/Box";

//style
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

export const ColorPicker = () => {
  const [color, setColor] = useState("default");

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <FormControl>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={color}
        onChange={handleChange}
        defaultValue={"default"}
      >
        {colorArray.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item === "default" ? item : null}
            {item === "default" ? null : (
              <StyledBoxColor color={item} boxShadow={1} />
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColorPicker;

const StyledBoxColor = styled(Box)`
  background-color: ${(props) => props.color};
  width: 1rem;
  height: 1rem;
`;
