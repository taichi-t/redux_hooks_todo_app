import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";

//style
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const Navbar = (props) => {
  //state
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { toggleDarkMode } = props;
  const [now, setNow] = useState("");

  useEffect(() => {
    const setTime = () => {
      const month = moment().format("MMMM");
      const date = moment().format("Do");
      setNow({ month, date });
    };
    setTime();
    setInterval(setTime, 60000);
  }, []);

  //handle actions
  const handleClick = (e) => {
    e.preventDefault();
    toggleDarkMode();
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Box>
          <Title color={theme.palette.text.primary}>
            <span>{now.date} </span>
            <Month>{now.month}</Month>
          </Title>

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

const Month = styled.span`
  font-size: 1rem;
`;
