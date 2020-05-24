import React from "react";

//style
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import CheckIcon from "@material-ui/icons/Check";
import IconButton from "@material-ui/core/IconButton";
import UndoIcon from "@material-ui/icons/Undo";

export const createList = (
  objects,
  selectHistory,
  selectHistories,
  uncheckHistories
) => {
  const results = [];
  for (let key in objects) {
    const todoIds = objects[key].map((object) => object.id);
    const toggleButton =
      objects[key].filter((object) => object.check === false).length === 0 ? (
        <IconButton
          color="secondary"
          aria-label="lightmode"
          onClick={uncheckHistories.bind(null, todoIds)}
        >
          <UndoIcon />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          aria-label="lightmode"
          onClick={selectHistories.bind(null, todoIds)}
        >
          <CheckIcon />
        </IconButton>
      );

    results.push(
      <li key={`section-${key}`}>
        <ul style={{ padding: "0" }}>
          <ListSubheader component="li">
            <Container>
              <BoxLeft>
                {moment(key).calendar(null, {
                  sameDay: "[Today]",
                  nextDay: "[Tomorrow]",
                  nextWeek: "dddd",
                  lastDay: "[Yesterday]",
                  lastWeek: "[Last] dddd",
                  sameElse: "DD/MM/YYYY",
                })}
              </BoxLeft>
              <BoxRigth>{toggleButton}</BoxRigth>
            </Container>
          </ListSubheader>
          {objects &&
            objects[key].map((item, index) => (
              <ListItem
                key={index}
                onClick={selectHistory.bind(null, item.id)}
                button={true}
              >
                <Checkbox
                  type="checkbox"
                  checked={item.check}
                  color="primary"
                />
                <ListItemText primary={`${item.name}`} />
              </ListItem>
            ))}
        </ul>
        <Divider variant="middle" />
      </li>
    );
  }
  return results;
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoxLeft = styled.div`
  font-size: 1.5rem;
  font-family: "Oswald", sans-serif;
`;

const BoxRigth = styled.div``;
