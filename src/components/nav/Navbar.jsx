import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";

/* ------------------------------- components ------------------------------- */
import { ColorPicker } from "./ColorPicker";

/* ---------------------------------- style --------------------------------- */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

export const Navbar = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const { toggleTheme } = props;
  const [now, setNow] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const setTime = () => {
      const month = moment().format("MMMM");
      const date = moment().format("Do");
      setNow({ month, date });
    };
    setTime();
    setInterval(setTime, 60000);
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                handle　actions                             */
  /* -------------------------------------------------------------------------- */
  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  // toggle component
  const icons = isDarkMode ? (
    <IconButton
      aria-label="darkmode"
      color="inherit"
      edge="end"
      onClick={handleClick}
    >
      <Brightness4Icon fontSize="large" />
    </IconButton>
  ) : (
    <IconButton
      aria-label="lightmode"
      color="inherit"
      edge="end"
      onClick={handleClick}
    >
      <Brightness7Icon fontSize="large" />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Title className={classes.title} color={theme.palette.text.primary}>
            <span>{now.date} </span>
            <Month>{now.month}</Month>
          </Title>

          <ColorPicker toggleTheme={toggleTheme} />
          {icons}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

/* ---------------------------------- style --------------------------------- */
const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 2rem;
`;

const Month = styled.span`
  font-size: 1rem;
`;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
