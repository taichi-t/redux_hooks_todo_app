import React from "react";

/* ------------------------------- components ------------------------------- */
import { CreateHistoryItem } from "./CreateHistoryItem";

export const CreateHistoryList = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { objects } = props;

  let content = [];
  for (let keys in objects) {
    let result = objects[keys];
    content.push(
      <CreateHistoryItem
        objects={result}
        key={`section-${keys}`}
        index={keys}
      />
    );
  }

  return <>{content}</>;
};

export default CreateHistoryList;
