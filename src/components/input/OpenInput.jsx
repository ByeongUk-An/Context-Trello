import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import InputAdd from "./InputAdd";

const useStyle = makeStyles((theme) => ({
  add: {
    margin: theme.spacing(1, 1, 0, 1),
    padding: theme.spacing(1, 1, 1, 2),
    backgroundColor: "#ebecf0",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: fade("#bbb", 0.5),
    },
  },
  box: {
    marginTop: theme.spacing(1),
  },
}));

function OpenInput({ listId, type }) {
  const classes = useStyle();
  const [toggle, setToggle] = useState(false);
  return (
    <div className={classes.box}>
      <Collapse in={toggle}>
        <InputAdd setToggle={setToggle} listId={listId} type={type} />
      </Collapse>

      <Collapse in={!toggle}>
        <Paper
          className={classes.add}
          elevation={0}
          onClick={() => setToggle(!toggle)}
        >
          <Typography>
            {type === "card" ? "+ Add another card" : "+ Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}

export default OpenInput;
