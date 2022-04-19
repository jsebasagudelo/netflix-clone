import React from 'react';

import { makeStyles, Typography,IconButton } from "@material-ui/core";
import {StyledButton} from  '../styled/Button'
import {useHistory} from 'react-router-dom'
import logo from "../assets/images/netflix-logo.png";
const NotFound = () => {

  const classes = useStyles();
  const history=useHistory();
  return (
    <div className={classes.root}>
        <IconButton onClick={() => history.push("/")}>
            <img src={logo} al="logo" className={classes.logo} />
          </IconButton>
      <Typography variant="h1">404 - Not Found!</Typography>
    

    <StyledButton onClick={ ()=> history.push("/") }>Go Home</StyledButton>
  </div>
  )
 
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    background: "#111",
    width: "100vw",
    height: "100vw",
    textAlign:"center",
  
  },
  logo: {
    width: "100px",
    cursor: "pointer",
  },
  link:{
    
    boxSizing: "inherit",
    padding: "2px 0",
    textDecoration:"none",
    color: "inherit",
    "&:hover":{
      borderBottom: "1px solid #fff"
    }
  }
}))
export default NotFound;