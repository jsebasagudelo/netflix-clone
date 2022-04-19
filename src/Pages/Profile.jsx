import { Typography, makeStyles, Box } from "@material-ui/core";
import React, { useContext } from "react";
import Header from "../components/Header";
import Plans from "../components/Plans";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../services/firebase/firebase";
import netflixavatar from "../assets/images/netflixavatar.png";
import { StyledButton } from "../styled/styledcomponents";
import { useHistory } from "react-router-dom";
const Profile = () => {
  const classes = useStyles();
  const user = useContext(AuthContext);
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    history.push("/");
  };

  return (
    <>
      
      <div className={classes.root}>
      <Box m={0} pt={10}>
      <div className={classes.body}>
          <Typography variant="h3">Edit Profile</Typography>
          <div className={classes.info}>
            <img src={netflixavatar} alt="avatar" />
            <div className={classes.details}>
              <div className={classes.plans}>
                <Typography variant="h6">Email usuario {user}</Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  className={classes.plansText}
                >
                  Plans
                </Typography>
                <Plans cost={7.99}>Netflix Standar</Plans>
                <Plans cost={11.99}>Netflix Basic</Plans>
                <Plans color="gray" cost={15.99} wide="medium">
                  Netflix Premium
                </Plans>
                <StyledButton wide="fullWidth" onClick={signOut}>
                  Sign Out
                </StyledButton>
              </div>
            </div>
          </div>
          </div>
        </Box>
        
        </div>

    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    width: "100vw",
    height: "100vw", 
    background: "#111", 
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "800px",
  
    background: "#111",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
        
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray",
  },
}));

export default Profile;
