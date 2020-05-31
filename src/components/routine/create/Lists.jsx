import React from "react";

/* ------------------------------- components ------------------------------- */
import Items from "./Items";

export const Lists = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { objects } = props;

  let content = [];
  for (let keys in objects) {
    let result = objects[keys];
    content.push(<Items objects={result} key={keys} />);
  }

  return <div>{content}</div>;
};

export default Lists;
