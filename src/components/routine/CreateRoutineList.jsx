import React from "react";

/* ------------------------------- components ------------------------------- */
import { CreateRoutineItem } from "./CreateRoutineItem";

export const CreateRoutineList = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { objects } = props;

  let content = [];
  for (let keys in objects) {
    let result = objects[keys];
    content.push(
      <CreateRoutineItem
        objects={result}
        key={`section-${keys}`}
        index={keys}
      />
    );
  }

  return <div>{content}</div>;
};

export default CreateRoutineList;
