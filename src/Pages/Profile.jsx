import { Typography, Box } from "@material-ui/core";
import React from "react";

import Plans from "../components/Plans";
import { auth } from "../services/firebase/firebase";
import netflixavatar from "../assets/images/netflixavatar.png";
import { StyledButton } from "../styled/Button";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../actions";
import Layout from "../containers/Layout";
import useStyleProfile from "../styles/components/StyleProfile";
const Profile = () => {
  const classes = useStyleProfile();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const signOut = () => {
    auth.signOut();
    dispatch(setUserInfo(""));
    history.push("/");
  };

  return (
    <>
      <Layout>
        <div className={classes.root}>
          <Box m={0} pt={10}>
            <div className={classes.body}>
              <Typography variant="h3">Edit Profile</Typography>
              <div className={classes.info}>
                <img src={netflixavatar} alt="avatar" />
                <div className={classes.details}>
                  <div className={classes.plans}>
                    <Typography variant="h6">
                      Email usuario {user.userInfo}
                    </Typography>
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
      </Layout>
    </>
  );
};



export default Profile;
