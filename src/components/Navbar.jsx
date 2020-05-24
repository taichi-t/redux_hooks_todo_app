import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";

//components
import { ColorPicker } from "./ColorPicker";

//style
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    alignSelf: "flex-end",
    flexGrow: 1,
  },
}));

export const Navbar = (props) => {
  //state
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

  //handle actions
  const handleClick = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  //toggle component
  const icons = isDarkMode ? (
    <IconButton aria-label="darkmode" color="inherit" edge="end">
      <Brightness4Icon onClick={handleClick} />
    </IconButton>
  ) : (
    <IconButton aria-label="lightmode" color="inherit" edge="end">
      <Brightness7Icon onClick={handleClick} />
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
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

//style
const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 2.4rem;
`;

const Month = styled.span`
  font-size: 1rem;
`;
