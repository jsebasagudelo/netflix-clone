import React, { Suspense, lazy } from "react";
import Banner from "../components/Banner";
import requests from "../Api/Requests";
import Loader from "../components/Loader";
import Layout from "../containers/Layout";
import useStyleHome from "../styles/components/StyleHome";
const Row = lazy(() => import("../components/Row"));

// design pattern: Stateless
const Home = () => {
  const classes = useStyleHome();
  
  return (
    <Layout>      
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

<Row
              id="5"
              titleMovie="Horror Movies"
              fetchUrl={requests.fetchHorrorMovies}
            />
          </div>
        </Suspense>
    </Layout>
  );
};



export default Home;
