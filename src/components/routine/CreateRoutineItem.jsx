import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

//actions
import { selectHistoryAction } from "../../store/actions";
import { selectHistoriesAction } from "../../store/actions";
import { uncheckHistoriesAction } from "../../store/actions";

//components
import { More } from "./More";

//style
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const CreateRoutineItem = (props) => {
  //state
  const classes = useStyles();
  const { objects, index } = props;
  const [open, setOpen] = useState(false);
  const [check, setCheck] = useState(
    objects.filter((object) => object.check === false).length === 0
      ? true
      : false
  );
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    objects.filter((object) => object.check === false).length === 0
      ? setCheck(true)
      : setCheck(false);
  }, [objects]);

  //dispatchActions
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));
  const selectHistories = (todoIds) => dispatch(selectHistoriesAction(todoIds));
  const uncheckHistories = (todoIds) =>
    dispatch(uncheckHistoriesAction(todoIds));

  const todoIds = objects && objects.map((object) => object.id);

  //handle actions
  const handleSelect = (e) => {
    setCheck(!check);
    objects.filter((object) => object.check === false).length === 0
      ? uncheckHistories(todoIds)
      : selectHistories(todoIds);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  //toggle components
  const folderIcon = open ? (
    <FolderOpenIcon color="primary" />
  ) : (
    <FolderIcon color="primary" />
  );

  return (
    <>
      <List component="ul" className={classes.list}>
        <ListItem className={classes.list} onClick={(e) => setOpen(!open)}>
          <ListItemIcon>
            <Box>
              <IconButton
                color="primary"
                onClick={handleSelect}
                edge="start"
                disableRipple={true}
                disableFocusRipple={true}
              >
                {folderIcon}
              </IconButton>
              {index}
            </Box>
          </ListItemIcon>

          <ListItemSecondaryAction>
            <IconButton
              className={classes.menuButton}
              edge="end"
              disableRipple={true}
              disableFocusRipple={true}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <More anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
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

export default CreateRoutineItem;

//style
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
