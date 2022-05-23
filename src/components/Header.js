import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Link to="/" className={classes.title}>
        Intuitive Quiz App
      </Link>
      <hr className={classes.divider} />
    </div>
  );
};

export default Header;

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    textTransform: "uppercase",
    fontSize: "8vw",
    fontFamily: "Montserrat",
    cursor: "pointer",
    color: "inherit",
    textDecoration: "inherit",
  },

  divider: {
    margin: "10px",
    width: "100%",
  },
});
