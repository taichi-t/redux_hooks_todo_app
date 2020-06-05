import React from "react";

/* ------------------------------- components ------------------------------- */
import Items from "./Items";

export const Lists = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { routines } = props;

  let content = [];
  routines.map((routine) =>
    content.push(<Items objects={routine} key={routine.id} />)
  );
  // for (let keys in objects) {
  //   let result = objects[keys];
  //   content.push(<Items objects={result} key={keys} index={keys} />);
  // }

  return <>{content}</>;
};

export default Lists;
