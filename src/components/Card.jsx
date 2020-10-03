import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";

function Card({ card, index }) {
  const useStyle = makeStyles((theme) => ({
    cardItem: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 1, 1, 2),
    },
  }));
  const classes = useStyle();
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.cardItem}>{card.title}</Paper>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
