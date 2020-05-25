import React from "react";

//style
import styled from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export const createList = (
  objects,
  selectHistory,
  selectHistories,
  uncheckHistories
) => {
  const results = [];
  for (let key in objects) {
    const todoIds = objects[key].map((object) => object.id);
    let up = true;
    const toggleButton =
      objects[key].filter((object) => object.check === false).length === 0 ? (
        <IconButton
          color="secondary"
          onClick={uncheckHistories.bind(null, todoIds)}
        >
          <Checkbox checked={true} color="primary" />
        </IconButton>
      ) : (
        <IconButton
          color="primary"
          onClick={selectHistories.bind(null, todoIds)}
        >
          <Checkbox checked={false} color="primary" />
        </IconButton>
      );

    results.push(
      <li key={`section-${key}`}>
        <List component="ul">
          <ListItem button onClick={(e) => setOpen(!open)}>
            <ListItemIcon>
              <Container>
                <BoxLeft>
                  {toggleButton}

                  {moment(key).calendar(null, {
                    sameDay: "[Today]",
                    nextDay: "[Tomorrow]",
                    nextWeek: "dddd",
                    lastDay: "[Yesterday]",
                    lastWeek: "[Last] dddd",
                    sameElse: "DD/MM/YYYY",
                  })}
                </BoxLeft>
                {/* <BoxRigth>{toggleButton}</BoxRigth> */}
              </Container>
            </ListItemIcon>
            <ListItemText />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
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
          </Collapse>
        </List>
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
