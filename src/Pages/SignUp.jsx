import React, { useState } from "react";
import { Typography,CircularProgress } from "@material-ui/core";
import { StyledButton } from "../styled/Button";
import { StyledInput } from "../styled/Input";
import { auth } from "../services/firebase/firebase";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../actions";

import useStylesSignUp from "../styles/components/StyleSignUp";
const SignUp = () => {
  const classes = useStylesSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage,setErrorMessage]=useState("")
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => console.log(authUser))
      .catch((err) => alert(err.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
      if(email ===''  || password ==='')
      {
        setErrorMessage("The password is invalid or the user does not have a password.")
      }else{
        setErrorMessage("")
      }
      auth
     .signInWithEmailAndPassword(email, password)
     .then((authUser) =>{

      dispatch(setUserInfo(authUser.user.email));

      } )
      .catch((err) => alert(err.message));

    }, 2000);    
  
   
 

    
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>

      <form className={classes.form}>
        <StyledInput
          placeholder="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className={classes.email}
        />
        <StyledInput
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.password}
        />

        <span
          className={classes.errormessage}
         
        >
          {errorMessage}
        </span>
        <StyledButton
          type="submit"
          wide="medium"
          radius="true"
          onClick={signIn}
        >
           
          {loading && <CircularProgress size={18}className={classes.icon} color="inherit" />}
          {!loading && 'SignIn'}
          
        </StyledButton>
        <Typography variant="subtitle2">
          New to Netflix ?{"  "}
          <span className={classes.signupLink} onClick={register}>
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  );
};



export default SignUp;
