import { makeStyles, Link } from "@material-ui/core";
import React from "react";

const Footer = () => {
  const userStyle = makeStyles(() => ({
    foot: {
      backgroundColor: "purple",
      color: "white",
      height: 50,
      width: "100%",
      display: "flex",
      paddingTop: "13px",
      // alignItems: "center",
      justifyContent: "center",
      border: "2px solid purple",
      borderRadius: 10,
    },
    name: {
      color: "purple",
    },
  }));
  const classes = userStyle();

  return (
    <div className={classes.foot}>
      Developed by &nbsp;
      <span className={classes.name}>
        <Link href="https://github.com/mdi007">Ibrahim</Link>
      </span>
      &nbsp; & &nbsp;
      <span className={classes.name}>
        <Link href="https://github.com/sankhla2001">Vikas</Link>
      </span>
      .
    </div>
  );
};

export default Footer;
