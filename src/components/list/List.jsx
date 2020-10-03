import React from "react";
import { Paper, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import OpenInput from "../input/OpenInput";
import { Droppable, Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}));
function List({ list, index }) {
  const classes = useStyle();
  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} id={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((item, index) => {
                    return <Card key={item.id} card={item} index={index} />;
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <OpenInput listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
}

export default List;
