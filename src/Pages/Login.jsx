import React, { useState } from "react";
import {  Typography } from "@material-ui/core";
import logo from "../assets/images/netflix-logo.png";
import HeroBanner from "../assets/images/HeroBanner.jpg";
import { StyledInput } from "../styled/Input";
import { StyledButton } from "../styled/Button";
import SignUp from "./SignUp";
import useStylesLogin from "../styles/components/StylesLogin";

const Login = () => {  

  const handleLogin=() =>{
     setSignIn(false)
  }  
  const classes = useStylesLogin();
  const [signIn, setSignIn] = useState(true);
  return (
    <div className={classes.root} style={{
      backgroundImage: `url(${HeroBanner})`
    }}>
      <img src={logo} className={classes.image} alt="logo" />
      <StyledButton className={classes.session}  onClick={handleLogin}>Iniciar session</StyledButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Unlimited films, TV programmes and more.
            </Typography>
            <Typography variant="h5">
              Watch anywhere. Cancel at any time.
            </Typography>
            <Typography variant="h6" gutterBottom>
              Ready to watch ? Enter your email to create or restart your
              membership.
            </Typography>
            <div className={classes.inputBlock}>
              <StyledInput placeholder="Email Address" />
              <StyledButton>Get started</StyledButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};



export default Login;
