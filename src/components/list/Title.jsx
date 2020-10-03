import React, { useState, useContext } from "react";
import { InputBase, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Context from "../../context/context";
import ClearIcon from "@material-ui/icons/Clear";

function Title({ title, id }) {
  const [newtitle, setNewTitle] = useState(title);
  const { upDateTitle, deleteList } = useContext(Context);
  const [edit, setEdit] = useState(false);
  const [toggle, setToggle] = useState(false);
  const handleTitle = () => {
    upDateTitle(newtitle, id);
    setEdit(!edit);
  };
  const onChange = (e) => {
    setNewTitle(e.target.value);
  };
  const dottoggle = (e) => {
    setToggle(!toggle);
    // console.log(toggle);
  };

  const onDelete = () => {
    deleteList(id);
  };

  const useStyle = makeStyles((theme) => ({
    titleContainer: {
      margin: theme.spacing(1),
      display: "flex",
      position: "relative",
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
    more: {
      cursor: "pointer",
    },

    togglecon: {
      width: "100%",
      height: "111px",
      backgroundColor: "white",
      position: "absolute",
      top: "34px",
      left: "260px",
      border: "1px solid #eee",
      boxShadow: "0px 0px 1px 1px",
      borderRadius: "4px",
      display: "block",
    },
    toggleconclick: {
      display: "none",
    },
    togglehead: {
      display: "flex",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      borderBottom: "1px solid black",
    },
    toggleheadLeft: {
      flexGrow: 1,
    },
    archive: {
      paddingLeft: theme.spacing(1.2),
      marginTop: theme.spacing(1.3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#cfcfcf",
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
          <MoreHorizIcon onClick={dottoggle} className={classes.more} />
          <div className={toggle ? classes.togglecon : classes.toggleconclick}>
            <div className={classes.togglehead}>
              <h3 className={classes.toggleheadLeft}>List Actions</h3>
              <IconButton>
                <ClearIcon className={classes.clearIcon} onClick={dottoggle} />
              </IconButton>
            </div>
            <div className={classes.archive}>
              <span onClick={onDelete}>Archive This List</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Title;
