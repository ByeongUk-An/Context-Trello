import React from "react";
import { Paper, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import OpenInput from "../input/OpenInput";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
  },
}));
function List({ list }) {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title title={list.title} />
        {list.cards.map((item) => {
          return <Card key={item.id} card={item} />;
        })}
        <OpenInput listId={list.id} />
      </Paper>
    </div>
  );
}

export default List;
