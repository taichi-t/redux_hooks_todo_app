import React from "react";

/* ------------------------------- components ------------------------------- */
import { CreateItems } from "./CreateItems";

export const CreateLists = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { objects } = props;

  let content = [];
  for (let keys in objects) {
    let result = objects[keys];
    content.push(
      <CreateItems objects={result} key={`section-${keys}`} index={keys} />
    );
  }

  return <>{content}</>;
};

export default CreateLists;
