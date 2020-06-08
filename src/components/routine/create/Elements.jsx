import React from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import {
  toggleRoutineAction,
  deleteRoutineAction,
} from "../../../store/actions";

/* ---------------------------------- HOOKS --------------------------------- */
import { useHideText } from "../../../hooks/useHideText";

/* ---------------------------------- style --------------------------------- */
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export const Elements = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { item, listId } = props;
  const [text] = useHideText();

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const toggle = (listId, routineId) =>
    dispatch(toggleRoutineAction(listId, routineId));
  const deleteRoutine = (listId, routineId) =>
    dispatch(deleteRoutineAction(listId, routineId));

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleCheck = (e) => {
    e.preventDefault();
    toggle(listId, item.id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteRoutine(listId, item.id);
  };

  return (
    <>
      <ListItem onClick={handleCheck} button={true}>
        {text(item.name, item.check, "0", "1.2rem")}
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            color="secondary"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Elements;
