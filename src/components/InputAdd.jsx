import React from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
const useStyle = makeStyles((theme) => ({
  clearIcon: {
    color: "#666",
    "&:hover": {
      backgroundColor: "#ebecf0",
      color: "#222",
    },
  },
  inputCon: {
    width: "280px",
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(5),
  },
  input: {
    paddingLeft: theme.spacing(2),
  },
  button: {
    color: "#fff",
    backgroundColor: "#5aac44",
  },
  btnCon: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

function InputAdd({ setToggle }) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.inputCon}>
          <InputBase
            multiline
            fullWidth
            autoFocus
            onBlur={() => setToggle(false)}
            placeholder="Enter a title for this card..."
            className={classes.input}
          />
        </Paper>
      </div>
      <div className={classes.btnCon}>
        <Button className={classes.button} onClick={() => setToggle(false)}>
          Add Card
        </Button>
        <IconButton>
          <ClearIcon className={classes.clearIcon} />
        </IconButton>
      </div>
    </div>
  );
}

export default InputAdd;
