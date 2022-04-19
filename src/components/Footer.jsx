import React from "react";
import { Link, makeStyles } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.footer_row}>
        <div>
          <Link href="#" color="inherit">
            Sebas Bell<span>&copy; 2022</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    maxWidth: "1000",
    margin: "auto",
    padding: "70px 56px",
  },

  copyright: {
    color: "#fff",
    textAlign: "center",
    lineHeight: "1.8",
    display: "flex",
    "&:hover": {
      borderBottom: "1px solid #fff",
    },
    "&:active,&:visited": {
      boxSizing: "inherit",
      padding: "2px 0",
      textDecoration: "none",
      color: "#fff",
    },
  },
  footer_row: {
    marginTop: "40",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    display: "flex",
    justifyContent: "center",
  },
  footer_wrapper: {
    maxWidth: "1000",
    margin: "auto",
    padding: "70px 56px",
  },
}));

export default Footer;
