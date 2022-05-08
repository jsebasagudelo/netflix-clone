import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { errorBoundary } from "../helpers/ErrorBoundary";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import { auth } from "../services/firebase/firebase";
import { useHistory } from "react-router-dom";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state }));
 const userName = user.userInfo;
 //const userName = "";
  const history = useHistory();

  const styles = {
    main:{ background:"#111",height:"100vh" }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log("onAuthStateChanged: " + userAuth.email);
      } else {
        history.push("/");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div style={styles.main}>
      {!userName ? (
        <Login />
      ) : (
        <>
        <Header/>
          {children}        
        </>
      )}
    </div>
  );
};

// pattern design react: HOC
export default errorBoundary(Layout);

