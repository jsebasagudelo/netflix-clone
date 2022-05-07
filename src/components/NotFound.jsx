import React from "react";
import { StyledButton } from "../styled/Button";
import { useHistory } from "react-router-dom";
import useStylesNotFound from "../styles/components/StyleNotFound";
import { Container, Grid, Typography } from "@material-ui/core";

const NotFound = () => {
  const classes = useStylesNotFound();
  const history = useHistory();

  const handleHome = () => {
    history.push("/")
  }


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
          <StyledButton onClick={handleHome}>Go Home</StyledButton>
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
