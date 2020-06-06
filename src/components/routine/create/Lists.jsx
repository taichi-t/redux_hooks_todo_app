import React from "react";

/* ------------------------------- components ------------------------------- */
import Items from "./Items";

/* ------------------------------ DRAG AND DROP ----------------------------- */
import { Draggable } from "react-beautiful-dnd";

export const Lists = (props) => {
  /* -------------------------------------------------------------------------- */
  /*                                    state                                   */
  /* -------------------------------------------------------------------------- */
  const { routines } = props;

  let content = [];
  routines.map((routine, index) =>
    content.push(
      <Draggable draggableId={routine.id} index={index} key={routine.id}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Items objects={routine} key={routine.id} />
          </div>
        )}
      </Draggable>
    )
  );

  return <>{content}</>;
};

export default Lists;
