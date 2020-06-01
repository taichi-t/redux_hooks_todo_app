import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import { selectHistoriesAction } from "../../../store/actions";
import { uncheckHistoriesAction } from "../../../store/actions";

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

/* ------------------------------- CONTEXT API ------------------------------ */
import { UiContext } from "../../../store/context/provider";

export const Items = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const classes = useStyles();
  const { objects, index } = props;
  const key = Object.keys(objects);
  const array = objects[key];

  const [openCollapseList, setOpenCollapseList] = useState(false);
  const [check, setCheck] = useState(
    array.filter((object) => object.check === false).length === 0 ? true : false
  );
  const [routine, setRoutine] = useState("");
  const [edit, setEdit] = useState(false);
  const { Ui, setUi } = useContext(UiContext);

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

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */
  const handleSelect = (e) => {
    setCheck(!check);
    array.filter((object) => object.check === false).length === 0
      ? uncheckHistories(todoIds)
      : selectHistories(todoIds);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);
    //wired
    setUi({ ...Ui, anchorEl: e.currentTarget });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routine.trim() === "") return;
    setRoutine("");
  };
  const handleChange = (e) => {
    setRoutine(e.target.value);
  };

  //toggle components
  const folderIcon = openCollapseList ? (
    <FolderOpenIcon className={classes.menuButton} />
  ) : (
    <FolderIcon className={classes.menuButton} />
  );

  const text = edit ? (
    <Input
      defaultValue={key}
      id={index}
      autoFocus={true}
      className={classes.input}
      disableUnderline={true}
    />
  ) : (
    <span className={classes.text}>{key}</span>
  );
  return (
    <>
      <List component="ul" className={classes.list}>
        <ListItem
          className={classes.list}
          onClick={(e) => setOpenCollapseList(!openCollapseList)}
        >
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
              {text}
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
            <More edit={edit} setEdit={setEdit} />
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
  input: {
    color: theme.palette.text.secondary,
    fontSize: "inherit",
  },
}));
