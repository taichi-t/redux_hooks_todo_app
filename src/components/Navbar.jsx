import React, { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "@material-ui/core/styles";

//style
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const Navbar = (props) => {
  const theme = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { toggleDarkMode } = props;

  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    toggleDarkMode();
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box>
          <Title color={theme.palette.text.primary}>Awesome Todo list</Title>

          <div onClick={handleClick}>
            <DarkModeToggle checked={isDarkMode} size={50} speed={6} />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

//style
const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 2.4rem;
  text-align: center;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
