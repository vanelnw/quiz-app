import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

const Result = ({ name, score }) => {
  const classes = useStyles();

  const history = useHistory();

  useEffect(() => {
    if (!name) {
      history.push("/");
    }
  }, [name, history]);

  return (
    <div className={classes.result}>
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;

const useStyles = makeStyles({
  result: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "60vh",
    textAlign: "center",
  },
});
