import React, { useState, useContext } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Context from "../../context/context";

function Title({ title, id }) {
  const [newtitle, setNewTitle] = useState(title);
  const { upDateTitle } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const handleTitle = () => {
    upDateTitle(newtitle, id);
    setEdit(!edit);
  };
  const onChange = (e) => {
    setNewTitle(e.target.value);
  };

  const useStyle = makeStyles((theme) => ({
    titleContainer: {
      margin: theme.spacing(1),
      display: "flex",
    },
    title: {
      flexGrow: 1,
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    input: {
      boxSizing: "border-box",
      marginLeft: theme.spacing(1),
      fontSize: "1.2rem",
      fontWeight: "bold",
      padding: 0,
      "&:focus": {
        background: "#f4f4f4",
      },
    },
  }));
  const classes = useStyle();
  return (
    <div>
      {edit ? (
        <div className={classes.titleContainer}>
          <InputBase
            onChange={onChange}
            value={newtitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            autoFocus
            onBlur={handleTitle}
          />
        </div>
      ) : (
        <div className={classes.titleContainer}>
          <Typography onClick={handleTitle} className={classes.title}>
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
}

export default Title;
