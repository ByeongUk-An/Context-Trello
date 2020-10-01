import React, { useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Title({ title }) {
  const [edit, setEdit] = useState(false);
  const handleTitle = () => {
    setEdit(!edit);
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
            value={title}
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
