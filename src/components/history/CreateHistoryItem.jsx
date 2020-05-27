import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */

import {
  selectHistoryAction,
  selectHistoriesAction,
  uncheckHistoriesAction,
} from "../../store/actions";

/* ---------------------------------- style --------------------------------- */

import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { makeStyles } from "@material-ui/core/styles";

export const CreateHistoryItem = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const classes = useStyles();
  const { objects, index } = props;
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(
    objects.filter((object) => object.check === false).length === 0
      ? true
      : false
  );

  useEffect(() => {
    objects.filter((object) => object.check === false).length === 0
      ? setCheck(true)
      : setCheck(false);
  }, [objects]);

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));
  const selectHistories = (todoIds) => dispatch(selectHistoriesAction(todoIds));
  const uncheckHistories = (todoIds) =>
    dispatch(uncheckHistoriesAction(todoIds));

  const todoIds = objects && objects.map((object) => object.id);

  /* -------------------------------------------------------------------------- */
  /*                                handleActions                               */
  /* -------------------------------------------------------------------------- */

  const handleSelect = (e) => {
    setCheck(!check);
    objects.filter((object) => object.check === false).length === 0
      ? uncheckHistories(todoIds)
      : selectHistories(todoIds);
  };
  return (
    <>
      <List component="ul" className={classes.list}>
        <ListItem className={classes.list}>
          <ListItemIcon>
            <Box>
              <IconButton
                color="primary"
                onClick={handleSelect}
                edge="start"
                disableRipple={true}
                disableFocusRipple={true}
              >
                <Checkbox checked={check} color="primary" />
              </IconButton>
              {moment(index).calendar(null, {
                sameDay: "[Today]",
                nextDay: "[Tomorrow]",
                nextWeek: "dddd",
                lastDay: "[Yesterday]",
                lastWeek: "[Last] dddd",
                sameElse: "DD/MM/YYYY",
              })}
            </Box>
          </ListItemIcon>

          <ListItemSecondaryAction>
            {open ? (
              <IconButton
                className={classes.menuButton}
                onClick={(e) => setOpen(!open)}
                edge="end"
              >
                <ExpandLess />
              </IconButton>
            ) : (
              <IconButton
                className={classes.menuButton}
                onClick={(e) => setOpen(!open)}
                edge="end"
              >
                <ExpandMore />
              </IconButton>
            )}
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {objects &&
            objects.map((item, index) => (
              <ListItem
                id={index}
                onClick={selectHistory.bind(null, item.id)}
                button={true}
                key={index}
              >
                <Checkbox
                  type="checkbox"
                  checked={item.check}
                  color="primary"
                  size="small"
                />
                <ListItemText primary={`${item.name}`} />
              </ListItem>
            ))}
        </Collapse>
      </List>
      <Divider variant="middle" />
    </>
  );
};

/* -------------------------------------------------------------------------- */
/*                                    style                                   */
/* -------------------------------------------------------------------------- */

const Box = styled.div`
  font-size: 1.6rem;
`;

const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  menuButton: {
    color: theme.palette.text.hint,
  },
}));
