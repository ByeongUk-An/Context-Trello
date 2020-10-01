import React, { useState, useContext } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import Context from "../../context/context";
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

function InputAdd({ setToggle, listId }) {
  const classes = useStyle();
  const { addingCard } = useContext(Context);
  const [cardText, setCardText] = useState("");

  const onChange = (e) => {
    setCardText(e.target.value);
    console.log(cardText);
  };

  const onClick = () => {
    // console.log("Hello");
    addingCard(cardText, listId);
    setCardText("");
    setToggle(false);
  };

  // const onBlurHandling = () => {
  //   setToggle(false);
  // };

  return (
    <div>
      <div>
        <Paper className={classes.inputCon}>
          <InputBase
            onChange={onChange}
            multiline
            fullWidth
            autoFocus
            // onBlur={onBlurHandling}
            className={classes.input}
            value={cardText}
            placeholder="Enter a title for this card..."
          />
        </Paper>
      </div>
      <div className={classes.btnCon}>
        <Button className={classes.button} onClick={onClick}>
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
