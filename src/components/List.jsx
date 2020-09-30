import React from "react";
import { Paper, Typography, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "./Card";
import OpenInput from "./OpenInput";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#ebecf0",
    marginLeft: theme.spacing(1),
  },
}));
function List() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        <Title />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <OpenInput />
      </Paper>
    </div>
  );
}

export default List;
