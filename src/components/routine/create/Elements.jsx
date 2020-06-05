import React from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */
import { toggleRoutineAction } from "../../../store/actions";

/* ---------------------------------- style --------------------------------- */

import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";

export const Elements = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */

  const { item, listId } = props;

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  const toggle = (listId, routineId) =>
    dispatch(toggleRoutineAction(listId, routineId));

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleClick = (e) => {
    e.preventDefault();
    toggle(listId, item.id);
  };

  return (
    <>
      <ListItem onClick={handleClick} button={true}>
        <Checkbox
          type="checkbox"
          checked={item.check}
          color="primary"
          size="small"
        />
        <ListItemText primary={`${item.name}`} />
      </ListItem>
    </>
  );
};

export default Elements;
