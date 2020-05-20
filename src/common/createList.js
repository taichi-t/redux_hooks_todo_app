import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import moment from "moment";

//style

export const createList = (objects) => {
  for (let key in objects) {
    return (
      <li key={`section-${key}`}>
        <ul>
          <ListSubheader style={{ fontSize: "1.5rem" }}>
            {moment(key).calendar(null, {
              sameDay: "[Today]",
              nextDay: "[Tomorrow]",
              nextWeek: "dddd",
              lastDay: "[Yesterday]",
              lastWeek: "[Last] dddd",
              sameElse: "DD/MM/YYYY",
            })}
          </ListSubheader>
          {objects &&
            objects[key].map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${item.name}`} />
              </ListItem>
            ))}
        </ul>
      </li>
    );
  }
};
