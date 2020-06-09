import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { useDispatch } from "react-redux";
import { selectHistoryAction } from "../../store/actions";
import { useHideText } from "../../hooks/useHideText";

export const CreateElements = (props) => {
  const { object } = props;
  const { id, name, check } = object;
  const [text] = useHideText();
  const dispatch = useDispatch();
  const selectHistory = (todoId) => dispatch(selectHistoryAction(todoId));
  const handleSelectHistory = (e) => {
    e.preventDefault();
    selectHistory(id);
  };
  return (
    <ListItem id={id} onClick={handleSelectHistory} button={true} key={id}>
      {text(name, check, "0", "1.2rem")}
    </ListItem>
  );
};
