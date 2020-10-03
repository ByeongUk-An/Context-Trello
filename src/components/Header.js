import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

function Header({ setOpen }) {
  const useStyle = makeStyles((theme) => ({
    headWrap: {
      width: "100%",
      backgroundColor: "hsla(0, 0%, 5%, 0.5)",
    },
    head: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "50%",
      margin: "0 0 0 auto",
      height: "50px",
      paddingRight: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
    title: {
      transform: "translateX(-50%)",
      color: "white",
    },
    btn: {
      width: "240px",
      height: "30px",
    },
  }));
  const classes = useStyle();
  return (
    <div className={classes.headWrap}>
      <div className={classes.head}>
        <h1 className={classes.title}>Trello</h1>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          Change Backgrounnd
        </Button>
      </div>
    </div>
  );
}

export default Header;
