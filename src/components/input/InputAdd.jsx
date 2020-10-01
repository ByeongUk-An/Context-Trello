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

function InputAdd({ setToggle, listId, type }) {
  const classes = useStyle();
  const { addingCard, addList } = useContext(Context);
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onClick = () => {
    if (type === "card") {
      addingCard(title, listId);
      setTitle("");
      setToggle(false);
    } else {
      addList(title);
      setTitle("");
      setToggle(false);
    }
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
            value={title}
            placeholder={
              type === "card"
                ? "Enter a title of this card.."
                : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div className={classes.btnCon}>
        <Button className={classes.button} onClick={onClick}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton>
          <ClearIcon className={classes.clearIcon} />
        </IconButton>
      </div>
    </div>
  );
}

export default InputAdd;
