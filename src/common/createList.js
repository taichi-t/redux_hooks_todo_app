import React from "react";

//style
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import moment from "moment";

export const createList = (objects, selectHistory) => {
  const options = [];
  for (let key in objects) {
    options.push(
      <li key={`section-${key}`}>
        <ul style={{ padding: "0" }}>
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
  return options;
};
