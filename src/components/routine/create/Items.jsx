import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import {
  selectHistoriesAction,
  uncheckHistoriesAction,
  changeFolderNameAction,
  DeleteFolderAction,
} from "../../../store/actions";

/* ------------------------------- components ------------------------------- */
import { More } from "../More";
import Elements from "./Elements";

/* ---------------------------------- style --------------------------------- */
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
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
import Input from "@material-ui/core/Input";
import AddIcon from "@material-ui/icons/Add";
import { TextField } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

/* ------------------------------- CONTEXT API ------------------------------ */

export const Items = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const classes = useStyles();
  const { objects, index } = props;
  const key = Object.keys(objects);
  const array = objects[key];
  let inputEl = useRef(null);

  const [openCollapseList, setOpenCollapseList] = useState(false);
  const [check, setCheck] = useState(
    array.filter((object) => object.check === false).length === 0 ? true : false
  );
  const [routine, setRoutine] = useState("");
  const [edit, setEdit] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [rename, setRename] = useState(key[0]);
  const [mouseEvent, setMouseEvent] = useState(false);

  useEffect(() => {
    array.filter((object) => object.check === false).length === 0
      ? setCheck(true)
      : setCheck(false);
  }, [array]);

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const selectHistories = (todoIds) => dispatch(selectHistoriesAction(todoIds));
  const uncheckHistories = (todoIds) =>
    dispatch(uncheckHistoriesAction(todoIds));
  const todoIds = array && array.map((object) => object.id);
  const changeFolderName = (folderId, newFolderName) =>
    dispatch(changeFolderNameAction(folderId, newFolderName, index));
  const DeleteFolder = (folderId, index) =>
    dispatch(DeleteFolderAction(folderId, index));
  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */
  const handleSelect = (e) => {
    setCheck(!check);
    array && array.filter((object) => object.check === false).length === 0
      ? uncheckHistories(todoIds)
      : selectHistories(todoIds);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routine.trim() === "") return;
    setRoutine("");
  };
  const handleChange = (e) => {
    setRoutine(e.target.value);
  };

  const handleOpen = (e) => {
    e.stopPropagation();
    setOpenCollapseList(!openCollapseList);
  };

  //folder rename functions
  const keyPressed = (e) => {
    if (e.key === "Enter") {
      setEdit(false);
      changeFolderName(key[0], rename, index);
      setRename("");
    }
  };

  const handleClickAway = (e) => {
    if (rename.trim() === "") {
      setMouseEvent(false);
      setEdit(false);
    } else {
      setEdit(false);
      setMouseEvent(false);
      changeFolderName(key[0], rename, index);
      setRename("");
    }
  };

  const handleNameChange = (e) => {
    setRename(e.target.value);
  };

  const handleEdit = () => {
    setEdit(!edit);
    const timeout = setTimeout(() => {
      inputEl.current.focus();
      setMouseEvent("onClick");
    });
    return () => {
      clearTimeout(timeout);
    };
  };

  //delete folder
  const handleDelete = () => {
    console.log("hi");
    DeleteFolder(key[0], index);
  };

  //toggle components
  const folderIcon = openCollapseList ? (
    <FolderOpenIcon className={classes.menuButton} />
  ) : (
    <FolderIcon className={classes.menuButton} />
  );

  return (
    <>
      <List component="ul" className={classes.list}>
        <ListItem className={classes.list} onClick={handleOpen}>
          <ListItemIcon>
            <Box>
              <IconButton
                onClick={handleSelect}
                edge="start"
                disableRipple={true}
                disableFocusRipple={true}
                color="default"
              >
                {folderIcon}
              </IconButton>

              <ClickAwayListener
                onClickAway={handleClickAway}
                mouseEvent={mouseEvent}
              >
                <TextField
                  id={index}
                  defaultValue={key}
                  inputRef={inputEl}
                  onChange={handleNameChange}
                  className={edit ? classes.textField : classes.textFieldOff}
                  onKeyPress={keyPressed}
                />
              </ClickAwayListener>

              <span className={edit ? classes.textOff : classes.text}>
                {key}
              </span>
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
            <More
              edit={edit}
              setEdit={setEdit}
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              inputEl={inputEl}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={openCollapseList} timeout="auto" unmountOnExit>
          {array && array.map((item) => <Elements item={item} key={item.id} />)}

          <ListItem>
            <IconButton edge="start" color="primary">
              <AddIcon />
            </IconButton>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <Input
                name="todo"
                type="text"
                onChange={handleChange}
                value={routine}
              />
            </form>
          </ListItem>
        </Collapse>
      </List>
      <Divider variant="middle" />
    </>
  );
};

export default Items;

/* ---------------------------------- style --------------------------------- */
const Box = styled.div`
  font-size: 1.6rem;
`;
const useStyles = makeStyles((theme) => ({
  list: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  menuButton: {
    color: theme.palette.text.secondary,
  },
  text: {
    color: theme.palette.text.secondary,
  },
  textOff: {
    display: "none",
  },
  textField: {
    color: theme.palette.text.secondary,
  },
  textFieldOff: {
    display: "none",
  },
}));
