import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Card({ card }) {
  const useStyle = makeStyles((theme) => ({
    cardItem: {
      margin: theme.spacing(1),
      padding: theme.spacing(1, 1, 1, 2),
    },
  }));
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.cardItem}>{card.title}</Paper>
    </div>
  );
}

export default Card;
