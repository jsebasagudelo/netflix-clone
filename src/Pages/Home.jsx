import React, { Suspense, lazy } from "react";
import Banner from "../components/Banner";
import requests from "../Api/Requests";
//import Row from "../components/Row";
import { makeStyles } from "@material-ui/core";
import Loader from "../components/Loader";
const Row = lazy(() => import("../components/Row"));

// design pattern: Stateless
const Home = () => {
  const classes = useStyles();
 

  return (
    <div>
      <Banner />
      <Suspense fallback={<Loader />}>
        <div className={classes.rows}>
          <Row
            id="1"
            titleMovie="Netflix Original"
            fetchUrl={requests.fetchTopRated}
          />

          <Row
            id="2"
            titleMovie="Action Movie"
            fetchUrl={requests.fetchActionMovies}
          />
          <Row
            id="3"
            titleMovie="Comedy Movie"
            fetchUrl={requests.fetchComedyMovies}
          />
          <Row
            id="4"
            titleMovie="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
          />
        </div>
      </Suspense>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
  },
  rows: {
    zIndex: "50",
    position: "relative",
    left: "0",
    top: "0",
    width: "100%",
    color: "#fff",
  },
}));

export default Home;
