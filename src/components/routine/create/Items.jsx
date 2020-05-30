import React, { useState, useEffect } from "react";
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

export const Items = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const classes = useStyles();
  const { objects, index } = props;
  const [openCollapseList, setOpenCollapseList] = useState(false);
  const [check, setCheck] = useState(
    objects.filter((object) => object.check === false).length === 0
      ? true
      : false
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [routine, setRoutine] = useState("");

  useEffect(() => {
    objects.filter((object) => object.check === false).length === 0
      ? setCheck(true)
      : setCheck(false);
  }, [objects]);

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const selectHistories = (todoIds) => dispatch(selectHistoriesAction(todoIds));
  const uncheckHistories = (todoIds) =>
    dispatch(uncheckHistoriesAction(todoIds));
  const todoIds = objects && objects.map((object) => object.id);

  /* -------------------------------------------------------------------------- */
  /*                               handle actions                               */
  /* -------------------------------------------------------------------------- */
  const handleSelect = (e) => {
    setCheck(!check);
    objects.filter((object) => object.check === false).length === 0
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
    console.log(routine);
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
              <span className={classes.text}>{index}</span>
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
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              setOpenCollapseList={setOpenCollapseList}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={openCollapseList} timeout="auto" unmountOnExit>
          {objects &&
            objects.map((item, index) => (
              <Elements item={item} index={index} key={index} />
            ))}

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
}));
