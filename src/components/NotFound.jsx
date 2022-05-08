import React from "react";
import useStylesNotFound from "../styles/components/StyleNotFound";
import {  Grid, Typography } from "@material-ui/core";
import Back from "./common/Back";

const NotFound = () => {
  const classes = useStylesNotFound();





  return (
    <div className={classes.root}>
   
      <div className={classes.bg} />
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={4}
        className={classes.content}
      >
        <Grid item>
          <Typography variant="h4">Lost your way?</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.
          </Typography>
        </Grid>
        <Grid item>
         
          <Back/>
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.error}>
            Error
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default NotFound;
