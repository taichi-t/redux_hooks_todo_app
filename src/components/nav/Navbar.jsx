import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

/* --------------------------------- ACTIONS -------------------------------- */
import { changeTypeAction } from "../../store/actions";

/* ------------------------------- components ------------------------------- */
import { ColorPicker } from "./ColorPicker";

/* ---------------------------------- style --------------------------------- */
import styled from "styled-components";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

export const Navbar = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */

  const type = useSelector((state) => state.users.userSettings.type);
  const theme = useTheme();
  const [now, setNow] = useState("");
  const classes = useStyles();
  const [isDarkMode, setIsDarkMode] = useState(type === "light" ? true : false);

  /* -------------------------------------------------------------------------- */
  /*                               DISPATCH ACTION                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const changeType = () => dispatch(changeTypeAction());

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
    changeType();
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

          <ColorPicker />
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
  font-size: 2.4rem;
`;

const Month = styled.span`
  font-size: 1rem;
`;

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
