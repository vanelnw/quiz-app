import { makeStyles } from "@material-ui/styles";
import React from "react";

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>Made by @Vanel</div>;
};

export default Footer;

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    marginBottom: "10px",
  },
});
