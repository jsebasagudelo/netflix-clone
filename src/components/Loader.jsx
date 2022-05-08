import React from "react";
import { makeStyles } from "@material-ui/core";

import CircularProgress from '@material-ui/core/CircularProgress';
const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
      <CircularProgress classes={{colorPrimary: classes.colorPrimary}} />
      <span className={classes.loader_text}>Loading...</span>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loader_text: {
    fontsize: "21",
    fontFamily: "'Source Sans Pro', sans-serif",
    color: "#65fafb;",
  },
  colorPrimary:{
    color: "#65fafb"
  }
}));

export default Loader;
