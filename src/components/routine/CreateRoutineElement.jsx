import React from "react";
import { useDispatch } from "react-redux";

/* --------------------------------- actions -------------------------------- */

import { selectHistoryAction } from "../../store/actions";

/* ---------------------------------- style --------------------------------- */

import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";

export const CreateRoutineElement = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */

  const { item, index } = props;

  /* -------------------------------------------------------------------------- */
  /*                               dispatchActions                              */
  /* -------------------------------------------------------------------------- */
  const dispatch = useDispatch();
  // const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));

  /* -------------------------------------------------------------------------- */
  /*                               HANDLE ACTIONS                               */
  /* -------------------------------------------------------------------------- */
  const handleClick = (e) => {
    console.log("hi");
    e.preventDefault();
  };

  return (
    <>
      <ListItem id={index} onClick={handleClick} button={true} key={index}>
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
