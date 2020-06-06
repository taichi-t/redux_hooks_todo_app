import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Input from "./Input";

/* --------------------------------- ACTIONS -------------------------------- */
import { DragAndDropActions } from "../../store/actions";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Lists as CreateList } from "./create/Lists";

/* ------------------------------ DRAG AND DROP ----------------------------- */
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

//style
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import ListIcon from "@material-ui/icons/List";
import { useTheme } from "@material-ui/core/styles";

export const List = () => {
  /* -------------------------------------------------------------------------- */
  /*                                    STATE                                   */
  /* -------------------------------------------------------------------------- */
  const theme = useTheme();
  const dispatch = useDispatch();
  const routine = useSelector((state) => state.users.routine);

  /* -------------------------------------------------------------------------- */
  /*                              DISPATCH ACTIONS                              */
  /* -------------------------------------------------------------------------- */
  const dragAndDrop = (sorce, destination) =>
    dispatch(DragAndDropActions(sorce, destination));

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    dragAndDrop(destination.index, source.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledPaper>
        <Title>
          <ListIcon fontSize="large" />
        </Title>
        {routine && routine.length !== 0 ? (
          <Droppable droppableId="list">
            {(provided) => (
              <div
                key={1}
                {...provided.doroppableProps}
                ref={provided.innerRef}
              >
                <CreateList routines={routine}></CreateList>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          <Message color={theme.palette.text.hint}>
            There is no routine...
          </Message>
        )}

        <Input />
      </StyledPaper>
    </DragDropContext>
  );
};

export default List;

/* ---------------------------------- STYLE --------------------------------- */
const StyledPaper = styled(Paper)`
  margin: 1rem;
  max-height: 50rem;
  overflow: scroll;
`;

const Title = styled.h2`
  text-align: center;
  padding: 1rem 0;
`;

const Message = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.color};
`;
