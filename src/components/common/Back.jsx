import React from "react";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { Typography, makeStyles } from "@material-ui/core/";
import { Link, withRouter } from "react-router-dom";
const Back = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        <Link className={classes.link} to={{ pathname: "/" }}>
          <KeyboardArrowLeft />
          <span className={classes.text}>Back to Home</span>
        </Link>
      </Typography>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  text: {
    display: "inline-block",
    verticalAlign: "text-bottom",
  },
}));

export default withRouter(Back);
