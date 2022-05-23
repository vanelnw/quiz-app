import { makeStyles } from "@material-ui/core";
import React from "react";

const ErrorMessage = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.error}>{children}</div>;
};

export default ErrorMessage;

const useStyles = makeStyles((theme) => ({
  error: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "4",
    backgroundColor: "orangered",
    textAlign: "center",
    color: "black",
    textTransform: "capitalize",
    marginBottom: "15px",
  },
}));
